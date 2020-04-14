import React from 'react';
import Hero from 'components/hero'

const Layout = ({ children }) => (
  <div className="c-layout">
    <Hero />
    {children}
  </div>
);

export default Layout;
