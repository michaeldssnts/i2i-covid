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
  const tabs = data && data.rows ? data.rows : null;

  const currentTab = tabs ? tabs.find((tab) => tab.slug === current) : null;

  const name = currentTab ? currentTab.name : null;
  const slug = currentTab ? currentTab.slug : null;

  return (
    <div className="l-country">
      <Header />
      <Hero iso={iso} />
      {!loading && data ? (
        <div className="country-content">
          <Navigation tabs={tabs} iso={iso} currentTab={slug} />
          <div className="country-info">
            {slug === 'summary' ? <Summary /> : <CardInfo title={name} iso={iso} category={slug} />}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

CountryPage.propTypes = {
  iso: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default CountryPage;
