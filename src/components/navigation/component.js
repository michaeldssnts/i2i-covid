import React from 'react';
import proptypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const Navigation = ({ tabs, current }) => {
  return (
    <div className="c-navigation">
      <ul>
        {tabs.map((item) => (
          <li
            key={item.category}
            id={item.category}
            className={classnames({ '-active': current === item.category })}
          >
            <Link to={`/${'NIG'}/#${item.category}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  tabs: proptypes.array.isRequired,
  currentTab: proptypes.string.isRequired,
};

export default Navigation;
