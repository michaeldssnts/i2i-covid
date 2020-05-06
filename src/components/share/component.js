import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import Modal from 'components/modal';
import Button from 'components/button';
import FacebookIcon from './icons/social-facebook-green.svg';
import TwitterIcon from './icons/social-twitter-green.svg';
import LinkedynIcon from './icons/social-linkedin-green.svg';
import EmailIcon from './icons/social-email-green.svg';

const Share = ({ slug, iso, query }) => {
  const inputElUrl = useRef();
  const inputElEmbed = useRef();
  const url = `${window.location.origin}/widget/${iso}/${slug}?${query}`;

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

  useEffect(() => {
    if (isOpen) {
      ReactGA.event({
        category: 'UI',
        action: 'Share modal is open',
      });
    }
  });

  return (
    <div className="c-share">
      <Button className="-border-color-2 -small" onClick={toggleModal}>
        Share
      </Button>
      <Modal
        title="Share"
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
        actionsComponent={() => (
          <div className="c-filters-action-buttons">
            <Button className="-border-color-1" onClick={toggleModal}>
              Close
            </Button>
          </div>
        )}
      >
        <div className="form-fields">
          <label>Public url to share</label>
          <div className="share-content">
            <input ref={inputElUrl} value={url} readOnly />

            <div className="share-controls">
              <a
                href={`http://www.facebook.com/sharer/sharer.php?u=${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="share-facebook" src={FacebookIcon} />
              </a>
              <a
                href={`https://twitter.com/share?url=${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="share-twitter" src={TwitterIcon} />
              </a>

              <a
                href={`mailto:?subject=Shared from i2i-COVID-19&body= I thought you'd be interested in some data about ${slug} in ${iso}: ${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="share-email" src={EmailIcon} />
              </a>

              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="share-linkedin" src={LinkedynIcon} />
              </a>

              <button className="copy-btn" onClick={() => handleClick('Url')}>
                {isCopied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
        <div className="form-fields">
          <label>Code to embed</label>
          <div className="share-content">
            <input
              ref={inputElEmbed}
              value={`<iframe src="${url}" width="100%" height="500px" frameBorder="0" />`}
              readOnly
            />
            <div className="share-controls">
              <button className="copy-btn" onClick={() => handleClick('Embed')}>
                {isCopied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

Share.propTypes = {
  query: PropTypes.string,
  slug: PropTypes.string.isRequired,
  iso: PropTypes.string,
};

Share.defaultProps = {
  query: '',
  iso: '',
};

export default Share;
