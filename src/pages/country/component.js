import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';
import Hero from 'components/hero';
import Spinner from 'components/spinner';
import Navigation from 'components/navigation';
import CardInfo from 'components/card';
import Summary from 'components/summary';
import { fetchCategories } from 'components/widget/utils';
import useAxios from 'axios-hooks';

const CountryPage = ({ iso, current }) => {
  const [{ data, loading }] = useAxios(fetchCategories());
  const categories = data && data.rows ? data.rows : [];
  const { name } = categories.find(({ slug }) => slug === current) || {};

  return (
    <div className="l-country">
      <Header />
      <Hero iso={iso} />
      {loading && <Spinner />}
      {data && !loading && (
        <div className="country-content">
          <Navigation tabs={categories} iso={iso} currentTab={current} />
          <div className="country-info">
            {current === 'summary' ? <Summary /> : <CardInfo title={name} iso={iso} category={current} />}
          </div>
        </div>
      )}
    </div>
  );
};

CountryPage.propTypes = {
  iso: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default CountryPage;
