import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import Dropdown from 'components/dropdown';

import cartoApi from 'utils/carto-api';

const SQL = `
  SELECT country as name,
    country_iso as iso
  FROM covid_data_test
  GROUP BY country, country_iso
`;

const Hero = ({ iso }) => {
  const [{ data }] = useAxios(cartoApi(SQL));
  const countries = data && data.rows ? data.rows : null;

  const current = countries ? countries.find((country) => country.iso === iso) : null;
  const options = countries ? countries.filter((country) => country.iso !== iso) : null;

  return (
    <div className="c-hero">
      <div className="hero-title">
        <h1>
          COVID-19 tracking survey status in
          {options && <Dropdown options={options} current={current} />}
        </h1>
      </div>
    </div>
  );
};

Hero.propTypes = {
  iso: PropTypes.string.isRequired,
};

export default Hero;
