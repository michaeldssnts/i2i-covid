import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';
import ReactGA from 'react-ga';
import useAxios from 'axios-hooks';
import Header from 'components/header';
import Spinner from 'components/spinner';

import { fetchCountries } from 'services/countries';

const HomePage = ({ location }) => {
  const [{ data, loading }] = useAxios(fetchCountries());
  const countries = data && data.rows && !loading && data.rows;

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <section className="l-homepage">
      <Header />
      <div className="container">
        <div className="homepage-wrapper">
          <article className="l-homepage-welcome">
            <div className="welcome-top" />
            <div className={classnames('welcome-content', 'clearfix')}>
              <header>
                <h1>COVID-19</h1>
                <h2>Tracking Survey Status</h2>
              </header>
              <p>
                The COVID-19 tracking survey themes include health and risk behaviours, food
                security, income, work and job security, personal safety concerns, and access to
                government and community support.
              </p>
              <aside>
                <p>Select a country to start &#8594;</p>
              </aside>
            </div>
            <div className="welcome-bottom" />
          </article>
          <nav className="l-homepage-countries-nav">
            {!countries ? (
              <Spinner />
            ) : (
              <ul>
                {countries.map((country) => (
                  <li key={country.country}>
                    {country.iso ? (
                      <Link
                        to={{
                          type: 'COUNTRY',
                          payload: { iso: country.iso, category: 'summary' },
                        }}
                      >
                        {country.country}
                      </Link>
                    ) : (
                      <span>{country.country}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
      </div>
    </section>
  );
};

HomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default HomePage;
