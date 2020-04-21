import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';
import Hero from 'components/hero';
import Navigation from 'components/navigation';
import TabsInfo from './constants';

const CountryPage = ({ iso, current }) => {
  const infoPage = TabsInfo.find((info) => info.category === current);
  return (
    <div className="l-country">
      <Header />
      <Hero iso={iso} />
      <div className="country-content">
        <Navigation tabs={TabsInfo} iso={iso} currentTab={current} />

      </div>
    </div>
  );
};

CountryPage.propTypes = {
  iso: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default CountryPage;
