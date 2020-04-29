import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Subscribe from 'components/subscribe';
import logo from './logo.svg';
import DownloadData from 'components/download/components';

const Header = ({ page }) => (
  <header className="c-header">
    <div className="container">
      <div className="header">
        <a href="/">
          <img src={logo} alt="i2i Covid Logo" className="logo-img" />
        </a>
        <div
          className={classnames('header-buttons', {
            '-hidden': page === 'Home',
          })}
        >
          <Subscribe />
          <DownloadData />
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Header;
