import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'redux-first-router-link';
import Button from 'components/button';

const PageSwitch = ({ page, prev }) => (
  <div className="c-resources">
    {page === 'Resources' && (
      <Button className="-border-color-1">
        <NavLink to={{ type: prev.type, payload: prev.payload }} exact={true} strict={true}>
          Country data
        </NavLink>
      </Button>
    )}
    {page === 'Country' && (
      <Button className="-border-color-1">
        <NavLink to={{ type: 'RESOURCES', pathname: '/resources' }} exact={true} strict={true}>
          Resources
        </NavLink>
      </Button>
    )}
  </div>
);

PageSwitch.propTypes = {
  prev: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.shape({
      iso: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  }),
  page: PropTypes.string.isRequired,
};

export default PageSwitch;
