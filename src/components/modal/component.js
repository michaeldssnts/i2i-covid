import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Button from 'components/button';

ReactModal.setAppElement('#root');

const Modal = ({ children, type, title, isOpen, onRequestClose, onReset, ...domProps }) => (
  <ReactModal className="c-modal" isOpen={isOpen} onRequestClose={onRequestClose} {...domProps}>
    <div className="modal-content">
      {title && <h2 className="modal-title">{title}</h2>}
      <button type="button" className="modal-button" onClick={onRequestClose}>
        x
      </button>
      {children}
      {type === 'filters' && (
        <div className="control-buttons">
          <Button className="-border-color-1 -medium" onClick={onReset}>
            Reset
          </Button>
          <Button className="-color-2 -medium" onClick={onRequestClose}>
            Apply
          </Button>
        </div>
      )}
    </div>
  </ReactModal>
);

Modal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.string,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  title: null,
  isOpen: false,
  type: '',
};

export default Modal;
