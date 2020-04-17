import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';
import Hero from 'components/hero';
import Navigation from 'components/navigation';
import TabsInfo from './constants';

const CountryPage = ({ iso, current }) => (
  <div>
    <Header />
    <Hero iso={iso} />
    <Navigation tabs={TabsInfo} />
  </div>
);

CountryPage.propTypes = {
  iso: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default CountryPage;
