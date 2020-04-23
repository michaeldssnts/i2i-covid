import React from 'react';
import logo from './logo.svg';

const Header = () => (
  <header className="c-header">
    <div className="container">
      <a href="/">
        <img src={logo} alt="i2i Covid Logo" className="logo-img" />
      </a>
    </div>
  </header>
);

export default Header;
