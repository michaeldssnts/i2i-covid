import React from 'react';
import PropTypes from 'prop-types';

import Hero from 'components/hero';

const Layout = ({ iso, children }) => (
  <div className="c-layout">
    <Hero iso={iso} />
    {children}
  </div>
);

Layout.propTypes = {
  iso: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Layout;
