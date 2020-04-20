import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';
import Hero from 'components/hero';
import Spinner from 'components/spinner';
import Navigation from 'components/navigation';
import CardInfo from 'components/card';
//import TabsInfo from './constants';
import { fetchCategories } from 'components/widget/utils';
import useAxios from 'axios-hooks';

const CountryPage = ({ iso, current }) => {
  const [{ data, loading, error }, refetch] = useAxios(fetchCategories());
  const tabs = !loading ? data.rows.name : null;
  const currentTab = !loading
    ? tabs.find(tab => tab.slug === current)
    : null;

  const { name, slug } = currentTab;

  return (
    <div className="l-country">
      <Header />
      <Hero iso={iso} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="country-content">
          <Navigation tabs={tabs} iso={iso} currentTab={slug} />
          <CardInfo title={name} iso={iso} category={slug} />
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
