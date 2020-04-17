import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const Navigation = ({ tabs, currentTab, iso }) => (
  <div className="c-navigation">
    <ul>
      {tabs.map((item) => (
        <li
          key={item.category}
          id={item.category}
          className={classnames({ '-active': currentTab === item.category })}
        >
          <Link
            to={{
              type: 'COUNTRY',
              pathname: '/country',
              payload: { iso, category: `${item.category}` },
            }}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Navigation.propTypes = {
  iso: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default Navigation;
