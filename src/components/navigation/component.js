import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'utils/responsive';
import { NavLink } from 'redux-first-router-link';
import Filters from 'components/filters';
import Button from 'components/button';
import ReactGA from 'react-ga';

const Navigation = ({ tabs, currentTab, iso, location, page }) => {
  const [isActive, toggleDropdown] = useState(false);

  useEffect(() => {
    ReactGA.ga('send', 'pageView', page);
    ReactGA.pageview(window.location.pathname);
  }, [location, page]);

  const handleClick = () => {
    toggleDropdown(!isActive);
  };

  return (
    <div className="c-navigation">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <MediaQuery maxWidth={breakpoints.lg}>
              <nav className="navigation -dropdown">
                <div className="row justify-content-between">
                  <div className="col-6">
                    <Button className="-color-2 dropdown-toggle" onClick={handleClick}>
                      {currentTab || 'Summary'}
                    </Button>
                    <div
                      id="categories"
                      className={classnames('dropdown-menu dropdown-menu-center', {
                        '-active': isActive,
                      })}
                    >
                      {tabs.map(({ name, slug }) => (
                        <NavLink
                          key={slug}
                          to={{ type: 'COUNTRY', payload: { iso, category: slug } }}
                          activeClassName="-active"
                          onClick={handleClick}
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
              </nav>
            </MediaQuery>
            <MediaQuery minWidth={breakpoints.lg - 1}>
              <nav className="navigation">
                <div id="categories" className="categories">
                  <NavLink
                    to={{ type: 'COUNTRY', payload: { iso, category: 'summary' } }}
                    activeClassName="-active"
                    isActive={(match, location) => location.payload.category === 'summary'}
                  >
                    Summary
                  </NavLink>
                  {tabs.map(({ name, slug }) => (
                    <NavLink
                      key={slug}
                      to={{ type: 'COUNTRY', payload: { iso, category: slug } }}
                      activeClassName="-active"
                      isActive={(match, location) => location.payload.category === slug}
                    >
                      {name}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </MediaQuery>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  iso: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  currentTab: PropTypes.string.isRequired,
  location: PropTypes.shape({
    payload: PropTypes.shape({
      category: PropTypes.string,
    }),
    pathname: PropTypes.string,
  }).isRequired,
  page: PropTypes.string.isRequired,
};

export default Navigation;
