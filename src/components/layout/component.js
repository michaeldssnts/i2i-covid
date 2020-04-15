import React from 'react';
import PropTypes from 'prop-types';

import Hero from 'components/hero';

const Layout = ({ iso }) => (
  <div className="c-layout">
    <Hero iso={iso} />
  </div>
);

Layout.propTypes = {
  iso: PropTypes.string.isRequired,
};

export default Layout;
