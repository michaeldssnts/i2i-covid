import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'utils/responsive';
import { NavLink } from 'redux-first-router-link';
import Filters from 'components/filters';
import Button from 'components/button';

const Navigation = ({ tabs, currentTab, iso }) => {
  const [isActive, toggleDropdown] = useState(false);

  const handleClick = () => {
    toggleDropdown(!isActive);
  };

  return (
    <div className="c-navigation">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <nav className={classnames('navigation', {
              '-dropdown': window.innerWidth < breakpoints.md })
            }>
              <MediaQuery maxWidth={breakpoints.md}>
                <div className="row justify-content-center">
                  <div className="col-6">
                    <Button className="-color-2 dropdown-toggle" onClick={handleClick}>
                      {currentTab}
                    </Button>
                    <div
                      id="categories"
                      className={classnames('dropdown-menu', {
                        '-active': isActive,
                      })}
                    >
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
                    </div>
                  </div>
                  <div className="col-6">
                    <Filters />
                  </div>
                </div>
              </MediaQuery>
              <MediaQuery minWidth={breakpoints.md - 1}>
                <NavLink
                  to={{ type: 'COUNTRY', payload: { iso, category: 'summary' } }}
                  activeClassName="-active"
                  exact={true}
                  strict={true}
                  isActive={(match, location) => location.payload.category === 'summary'}
                >
                  Summary
                </NavLink>
                <div id="categories" className="categories">
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
                </div>
              </MediaQuery>
            </nav>
          </div >
        </div >
      </div >
    </div >
  );
};

Navigation.propTypes = {
  iso: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default Navigation;
