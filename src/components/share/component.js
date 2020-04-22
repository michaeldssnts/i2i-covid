import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/modal';
import Button from 'components/button';

const Share = ({ slug, iso }) => {
  const inputElUrl = useRef();
  const inputElEmbed = useRef();
  const url = `${window.location.origin}/widget/${slug}?iso=:${iso}`;
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

  const handleModal = () => {
    setState({ isOpen: !isOpen });
  };

  return (
    <div className="c-share">
      <Button className="-border-color-2 -small" onClick={handleModal}>
        Share
      </Button>
      <Modal isOpen={isOpen} onRequestClose={() => setState({ isOpen: false })}>
        <div className="container">
          <h2>Public url to share</h2>
          <div className="share-controls">
            <input ref={inputElUrl} value={url} readOnly />
            <Button className="-border-color-2" onClick={() => handleClick('Url')}>
              {isCopied ? 'Copied' : 'Copy'}
            </Button>
          </div>
        </div>
        <div className="container">
          <h2>Code to embed</h2>
          <div className="share-controls">
            <input
              ref={inputElEmbed}
              value={`<iframe src="${url}" width="100%" height="500px" frameBorder="0" />`}
              readOnly
            />
            <Button className="-border-color-2" onClick={() => handleClick('Embed')}>
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
