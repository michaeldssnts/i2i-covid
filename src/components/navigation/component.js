import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const Navigation = ({ tabs, currentTab, iso }) => (
  <div className="c-navigation">
    <ul>
      <li id="Summary" className={classnames({ '-active': currentTab === 'summary' })}>
        <Link
          to={{
            type: 'COUNTRY',
            payload: { iso, category: 'summary' },
          }}
        >
          Summary
        </Link>
      </li>
      {tabs.map(({ name, slug }) => (
        <li key={slug} id={slug} className={classnames({ '-active': currentTab === slug })}>
          <Link
            to={{
              type: 'COUNTRY',
              payload: { iso, category: slug },
            }}
          >
            {name}
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
