import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';
import ReactGA from 'react-ga';

const Dropdown = ({ options, current, location }) => {
  const [isActive, toggleDropdown] = useState(false);

  useEffect(() => {
    ReactGA.ga('send', 'pageView', location.pathname);
  }, [location]);

  const handleClick = () => {
    toggleDropdown(!isActive);
  };
  return (
    <div className="c-dropdown dropdown">
      <button className="btn dropdown-toggle" onClick={handleClick}>
        {current.country}
      </button>
      <div
        className={classnames('dropdown-menu dropdown-menu-center', {
          '-active': isActive,
        })}
      >
        {options.map(({ iso, country }) => (
          <Link
            key={iso}
            to={{ type: 'COUNTRY', payload: { iso, category: 'summary' } }}
            onClick={handleClick}
            className="dropdown-item"
          >
            {country}
          </Link>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      iso: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ),
  current: PropTypes.shape({
    country: PropTypes.string.isRequired,
    iso: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Dropdown;
