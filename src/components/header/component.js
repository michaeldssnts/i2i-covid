import React from 'react';
import Subscribe from 'components/subscribe';
import logo from './logo.svg';
import DownloadData from 'components/download/components';

const Header = () => (
  <header className="c-header">
    <div className="container">
      <div className="header">
        <a href="/">
          <img src={logo} alt="i2i Covid Logo" className="logo-img" />
        </a>
        <div className="header-buttons">
          <Subscribe />
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <DownloadData />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
