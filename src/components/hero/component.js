import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'utils/responsive';
import Dropdown from 'components/dropdown';
import Filters from 'components/filters';
import DownloadForm from 'components/download-form';
import Subscribe from 'components/subscribe';
import { fetchCountries } from 'services/countries';

const Hero = ({ iso }) => {
  const [{ data }] = useAxios(fetchCountries());
  const countries = data && data.rows ? data.rows : null;
  const current = countries ? countries.find((country) => country.iso === iso) : null;
  const options = countries ? countries.filter((country) => country.iso !== iso) : null;

  return (
    <section className="c-hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="hero-title">
              COVID-19 tracking survey status <br />
              in&nbsp;
              {options && <Dropdown options={options} current={current} />}
            </h1>
          </div>
        </div>
        <MediaQuery minWidth={breakpoints.lg - 1}>
          <div className="row">
            <div className="col-auto ml-auto mr-auto">
              <Filters />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={breakpoints.md}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <Subscribe />
            </div>
            <div className="col-auto">
              <DownloadForm />
            </div>
          </div>
        </MediaQuery>
      </div>
    </section>
  );
};

Hero.propTypes = {
  iso: PropTypes.string.isRequired,
};

export default Hero;
