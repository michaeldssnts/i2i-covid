import React from 'react';
import logo from './logo.svg';
import DownloadData from 'components/download/components';

const Header = () => (
  <header className="c-header">
    <div className="container">
      <div className="row">
        <div className="col">
          <a href="/">
            <img src={logo} alt="i2i Covid Logo" className="logo-img" />
          </a>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <DownloadData />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
