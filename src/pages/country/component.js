import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';
import Hero from 'components/hero';
import Footer from 'components/footer';
import Spinner from 'components/spinner';
import Navigation from 'components/navigation';
import CardInfo from 'components/card';
import Summary from 'components/summary';
import { fetchCategories } from 'services/categories';
import useAxios from 'axios-hooks';

const CountryPage = ({ iso, current, page }) => {
  const [{ data, loading }] = useAxios(fetchCategories());
  const categories = data && data.rows ? data.rows : [];
  const { name, description } = categories.find(({ slug }) => slug === current) || {
    name: 'Summary',
  };

  return (
    <div className="l-country">
      <Header />
      <Hero iso={iso} page={page} />

      <div className="country-content">
        <div className="container country-content-decoration" />
        <div className="container">
          <div className="row">
            <div className="col">
              {loading && <Spinner />}
              {data && !loading && (
                <>
                  <Navigation tabs={categories} iso={iso} currentTab={name} />
                  <div className="country-info">
                    {current === 'summary' ? (
                      <Summary categories={categories} />
                    ) : (
                      <CardInfo
                        title={name}
                        description={description}
                        iso={iso}
                        category={current}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

CountryPage.propTypes = {
  iso: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default CountryPage;
