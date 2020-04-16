import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Button from 'components/button';

ReactModal.setAppElement('#root');

const Modal = ({ children, onRequestClose, ...domProps }) => (
  <ReactModal className="c-modal" onRequestClose={onRequestClose} {...domProps}>
    <div className="modal-content">
      <button type="button" className="modal-button" onClick={onRequestClose}>
        x
      </button>
      {children}
      <Button>Cancel</Button>
      <Button>Close</Button>
    </div>
  </ReactModal>
);

Modal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
