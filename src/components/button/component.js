import React from 'react';
import classnames from 'classnames';

export default (props) => {
  const { children, type, className, ...domProps } = props;

  return (
    <button
      type={type || 'button'}
      className={classnames('c-button', {
        [className]: className,
      })}
      {...domProps}
    >
      {children}
    </button>
  );
};