import React from 'react';
import logo from './logo.svg';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className="l-container">
      <img src={logo} height={56} />
    </div>
  </header>
);

export default Header;
