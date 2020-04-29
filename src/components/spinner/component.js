import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Spinner = ({ isLoading }) => (
  <div className={classnames('c-spinner', { loading: isLoading })} />
);

Spinner.propTypes = {
  isLoading: PropTypes.bool,
};

Spinner.defaultProps = {
  isLoading: true,
};

export default Spinner;
