import React from 'react';
import PropTypes from 'prop-types';

import TabsInfo from './constants';
import Layout from 'components/layout';

const CountryPage = ({ iso, current }) => <Layout iso={iso} info={TabsInfo} current={current} />;

CountryPage.propTypes = {
  iso: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default CountryPage;
