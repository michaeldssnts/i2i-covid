import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'redux-first-router-link';

const Navigation = ({ tabs, iso }) => (
  <div className="c-navigation">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <nav className="navigation">
            <NavLink
              to={{ type: 'COUNTRY', payload: { iso, category: 'summary' } }}
              activeClassName="-active"
              exact={true}
              strict={true}
              isActive={(match, location) => location.payload.category === 'summary'}
            >
              Summary
            </NavLink>
            {tabs.map(({ name, slug }) => (
              <NavLink
                key={slug}
                to={{ type: 'COUNTRY', payload: { iso, category: slug } }}
                activeClassName="-active"
                exact={true}
                strict={true}
                isActive={(match, location) => location.payload.category === slug}
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </div>
);

Navigation.propTypes = {
  iso: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default Navigation;
