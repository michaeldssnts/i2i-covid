import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'redux-first-router-link';

const PageSwitch = ({ page }) => (
  <div className="c-switch">
    {page === 'Country' && (
      <NavLink
        className="c-button -border-color-1"
        to={{ type: 'RESOURCES', pathname: '/resources' }}
        exact={true}
        strict={true}
      >
        Resources
      </NavLink>
    )}
  </div>
);

PageSwitch.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PageSwitch;
