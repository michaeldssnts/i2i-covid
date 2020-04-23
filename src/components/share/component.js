import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/modal';
import Button from 'components/button';

const Share = ({ slug, iso }) => {
  const inputElUrl = useRef();
  const inputElEmbed = useRef();
  const url = `${window.location.origin}/widget/${iso}/${slug}`;

  const [{ isCopied, isOpen }, setState] = useState({
    isUrlCopied: false,
    isEmbedCopied: false,
    isOpen: false,
  });

  const handleClick = (param) => {
    const { current } = param === 'Url' ? inputElUrl : inputElEmbed;
    current.select();

    try {
      document.execCommand('copy');
      setState({ [`is${param}Copied`]: true });
      setTimeout(() => {
        setState({ [`is${param}Copied`]: false });
        current.blur();
      }, 3000);
    } catch (err) {
      console.warn('Oops, unable to copy');
    }
  };

  const toggleModal = () => {
    setState({ isOpen: !isOpen });
  };

  return (
    <div className="c-share">
      <Button className="-border-color-2 -small" onClick={toggleModal}>
        Share
      </Button>

      <Modal isOpen={isOpen} onRequestClose={() => toggleModal(false)}>
        <div className="share-content">
          <h3 className="label">Public url to share</h3>
          <div className="share-control">
            <input ref={inputElUrl} value={url} readOnly />
            <div className="share-buttons">
              <a
                href={`http://www.facebook.com/sharer/sharer.php?u=${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                F
              </a>
              <a
                href={`https://twitter.com/share?url=${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                T
              </a>

              <Button
                className="copy-button -border-color-2 -small"
                onClick={() => handleClick('Url')}
              >
                {isCopied ? 'Copied' : 'Copy'}
              </Button>
            </div>
          </div>

          <h3 className="label">Code to embed</h3>
          <div className="share-control">
            <input
              ref={inputElEmbed}
              value={`<iframe src="${url}" width="100%" height="500px" frameBorder="0" />`}
              readOnly
            />
            <Button className="-border-color-2 -small" onClick={() => handleClick('Embed')}>
              {isCopied ? 'Copied' : 'Copy'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

Share.propTypes = {
  slug: PropTypes.string.isRequired,
  iso: PropTypes.string,
};

Share.defaultProps = {
  iso: '',
};

export default Share;
