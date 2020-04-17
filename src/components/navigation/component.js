import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const Navigation = ({ tabs, currentTab }) => (
  <div className="c-navigation">
    <ul>
      {tabs.map((item) => (
        <li
          key={item.category}
          id={item.category}
          className={classnames({ '-active': currentTab === item.category })}
        >
          <Link to={{ payload: { category: `${item.category}` } }}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

Navigation.propTypes = {
  tabs: PropTypes.array.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default Navigation;
