import React from 'react';
import Link from 'redux-first-router-link';

import countries from './constants';

const Hero = () => (
  <div className="c-hero">
    <h1>COVID19 status in
      <div className="nav-menu-item">
        <ul className="dropdown-list">
          {countries.map(country =>
            <li key={country.iso}>
              <Link to={`${country.path}/${country.iso}`}>
                {country.name}
              </Link>
            </li>
          )}
        </ul>
      </div>)
    </h1>
  </div>
);

export default Hero;
