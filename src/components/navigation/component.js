import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { NavLink } from 'redux-first-router-link';

const Navigation = ({ tabs, currentTab, iso }) => {
  const handleClick = () => {
    document.getElementById('categories').scrollLeft += 100;
  };

  return (
    <div className="c-navigation">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* <MadiaQuery minwidth={breakpoints}>

            </MadiaQuery> */}
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
              <button onClick={handleClick}>More</button>
            </nav>
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
};

export default Navigation;
