import React from 'react';
import PropTypes from 'prop-types';
import Widget from 'components/widget';

import Hero from 'components/hero';

const Layout = ({ iso }) => (
  <div className="c-layout">
    <Hero iso={iso} />
    <Widget />
  </div>
);

Layout.propTypes = {
  iso: PropTypes.string.isRequired,
};

export default Layout;
