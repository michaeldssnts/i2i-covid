import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const Dropdown = ({ info, option }) => {
  const [isActive, toggleDropdown] = useState(false);
  const handleClick = () => {
    toggleDropdown(!isActive);
  };
  return (
    <div className="c-dropdown">
      <button onClick={handleClick}>{option.name}</button>
      <ul
        className={classnames('dropdown-list', {
          '-active': isActive,
        })}
      >
        {info.map((i) => (
          <li key={i.iso} onClick={handleClick}>
            <Link to={{ payload: { iso: `${i.iso}`, category: 'summary' } }}>{i.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      iso: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  option: PropTypes.shape({
    name: PropTypes.string.isRequired,
    iso: PropTypes.string.isRequired,
  }),
};

export default Dropdown;
