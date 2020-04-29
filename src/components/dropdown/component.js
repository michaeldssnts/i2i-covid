import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const Dropdown = ({ options, current }) => {
  const [isActive, toggleDropdown] = useState(false);
  const handleClick = () => {
    toggleDropdown(!isActive);
  };
  return (
    <div className="c-dropdown dropdown">
      <button
        className={classnames('btn', { 'dropdown-toggle': options.length > 0 })}
        onClick={handleClick}
      >
        {current.country}
      </button>
      <div
        className={classnames('dropdown-menu', {
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
};

export default Dropdown;
