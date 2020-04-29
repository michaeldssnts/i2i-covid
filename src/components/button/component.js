import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = (props) => {
  const { children, type, className, ...domProps } = props;

  return (
    <button
      type={type || 'button'}
      className={classnames('btn', 'c-button', {
        [className]: className,
      })}
      {...domProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: null,
};

export default Button;
