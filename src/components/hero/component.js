import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/dropdown';

import countries from './constants';

const Hero = ({ iso }) => {
  const option = countries.find((country) => country.iso === iso);
  const options = countries.filter((country) => country.iso !== iso);
  const [isOpen, toggleDropdown] = useState(false);

  const handleClick = () => {
    toggleDropdown(!isOpen);
  };
  return (
    <div className="c-hero">
      <div className="hero-title">
        <h1>
          COVID19 status in
          <Dropdown info={options} isOpen={isOpen}>
            <button onClick={handleClick}>
              <p>{option.name}</p>
            </button>
          </Dropdown>
        </h1>
      </div>
    </div>
  );
};

Hero.propTypes = {
  iso: PropTypes.string.isRequired,
};

export default Hero;
