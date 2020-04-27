import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/modal';
import Button from 'components/button';
import FacebookIcon from './icons/social-facebook.svg';
import TwitterIcon from './icons/social-twitter.svg';
import InstagramIcon from './icons/social-instagram.svg';
import LinkedynIcon from './icons/social-linkedin.svg';
import YoutubeIcon from './icons/social-youtube.svg';


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
      <Modal title="Share" isOpen={isOpen} onRequestClose={() => toggleModal(false)}>
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
                <img alt="share-facebook" src={FacebookIcon} />
              </a>
              <a
                href={`https://twitter.com/share?url=${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="share-twitter" src={TwitterIcon} />
              </a>

              {/* <a
                href={`mailto:?subject=Shared from i2i-COVID-19&body= I thought you'd be interested in some data about ${slug} in ${iso}: ${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="share-email" src={EmailIcon} />
              </a> */}

              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="share-linkedin" src={LinkedynIcon} />
              </a>

              {/* <a
                href={`${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="share-youtube" src={YoutubeIcon} />
              </a>

              <a
                href={`${url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="share-instagram" src={InstagramIcon} />
              </a> */}

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
