import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Button from 'components/button';

ReactModal.setAppElement('#root');

const Modal = ({ children, title, isOpen, onRequestClose, onCancel, ...domProps }) => (
  <ReactModal className="c-modal" isOpen={isOpen} onRequestClose={onRequestClose} {...domProps}>
    <div className="modal-content">
      {title && <h2 className="modal-title">{title}</h2>}
      <button type="button" className="modal-button" onClick={onRequestClose}>
        x
      </button>
      {children}
      <div className="control-buttons">
        <Button className="-border-color-1 -medium" onClick={onCancel}>
          Cancel
        </Button>
        <Button className="-color-2 -medium" onClick={onRequestClose}>
          Close
        </Button>
      </div>
    </div>
  </ReactModal>
);

Modal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  title: null,
  isOpen: false,
};

export default Modal;
