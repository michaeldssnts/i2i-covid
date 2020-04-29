import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'utils/responsive';
import Subscribe from 'components/subscribe';
import logo from './logo.svg';
import DownloadForm from 'components/download-form';

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
          <MediaQuery minWidth={breakpoints.md - 1}>
            <Subscribe />
            <DownloadForm />
          </MediaQuery>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Header;
