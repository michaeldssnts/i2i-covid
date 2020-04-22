import React, { useState, useRef } from 'react';

import Modal from 'components/modal';
import Button from 'components/button';

const Share = ({slug}) => {
  const inputEl = useRef();
  const url = `${window.location.origin}/widget/${slug}`;
  const [{ isCopied, isOpen }, setState] = useState({ isCopied: false, isOpen: false });

  const handleClick = () => {
    const { current } = inputEl;
    current.select();

    try {
      document.execCommand('copy');
      setState({ isCopied: true });
      setTimeout(() => {
        setState({ isCopied: false });
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
        <Modal isOpen={isOpen} onRequestClose={() => setState({ isOpen: false })}>
          <div className="c-share">
            <div className="container">
              <h2>Link to share:</h2>
              <div className="share-controls">
                <input ref={inputEl} value={url} readOnly />
                <Button className="-color-1" onClick={handleClick}>
                  {isCopied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </div>
            <div className="container">
              <h2>Link to embed:</h2>
              <div className="share-controls">
                <input
                  ref={inputEl}
                  value={`<iframe src="${url}" width="100%" height="500px" frameBorder="0" />`}
                  readOnly
                />
                <Button className="-color-1" onClick={handleClick}>
                  {isCopied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </Button>
    </div>
  );
};

export default Share;
