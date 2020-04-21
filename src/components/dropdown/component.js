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
    <div className="c-dropdown">
      <button onClick={handleClick}>{current.name}</button>
      <ul
        className={classnames('dropdown-list', {
          '-active': isActive,
        })}
      >
        {options.map(({ iso, name }) => (
          <li key={iso} onClick={handleClick}>
            <Link to={{ type: 'COUNTRY', payload: { iso, category: 'summary' } }}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      iso: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  current: PropTypes.shape({
    name: PropTypes.string.isRequired,
    iso: PropTypes.string.isRequired,
  }),
};

export default Dropdown;
