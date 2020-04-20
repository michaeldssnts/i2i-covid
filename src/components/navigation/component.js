import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const Navigation = ({ tabs, currentTab, iso }) => (
  <div className="c-navigation">
    <ul>
      {tabs.map((item) => (
        <li
          key={item.name}
          id={item.name}
          className={classnames({ '-active': currentTab === item.slug })}
        >
          <Link
            to={{
              type: 'COUNTRY',
              pathname: '/country',
              payload: { iso, category: `${item.slug}` },
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
