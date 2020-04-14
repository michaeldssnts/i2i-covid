import React, { useState } from 'react';
import proptypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const Dropdown = ({ info, children, isOpen }) => {
  const [isActive, toggleDropdown] = useState(isOpen);
  const handleClick = () => {
    toggleDropdown(!isActive);
  };

  return (<div className="c-dropdown">
    {children}
    <ul
      className={classnames('dropdown-list', {
        '-active': isOpen,
      })}
    >
      {info.map((i) => (
        <li key={i.iso} onClick={handleClick}>
          <Link to={`/${i.iso}`}>{i.name}</Link>
        </li>
      ))}
    </ul>
  </div>)
};

Dropdown.propTypes = {
  info: proptypes.shape({
    iso: proptypes.string.isRequired,
    name: proptypes.string.isRequired,
  }),
  isOpen: proptypes.bool.isRequired,
  children: proptypes.string.isRequired,
};

export default Dropdown;
