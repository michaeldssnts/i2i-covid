import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';

const CountryPage = ({ iso }) => <Layout iso={iso} />;

CountryPage.propTypes = {
  iso: PropTypes.string.isRequired,
};

export default CountryPage;
