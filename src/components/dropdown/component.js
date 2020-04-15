import React, { useState } from 'react';
import proptypes from 'prop-types';
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
            <Link to={`/${i.iso}`}>{i.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  info: proptypes.arrayOf(
    proptypes.shape({
      iso: proptypes.string.isRequired,
      name: proptypes.string.isRequired,
    })
  ),
  option: proptypes.shape({
    name: proptypes.string.isRequired,
    iso: proptypes.string.isRequired,
  }),
};

export default Dropdown;
