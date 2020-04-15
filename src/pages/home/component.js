import React from 'react';
import classnames from 'classnames';
import Link from 'redux-first-router-link';
import styles from './styles.module.scss';

const HomePage = () => (
  <section className={styles.homepage}>
    <div className="l-container">
      <article className={styles.welcome}>
        <div className={styles.welcomeTop} />
        <div className={classnames(styles.welcomeContent, 'clearfix')}>
          <header>
            <h1>COVID-19</h1>
            <h2>Tracking Survey Status</h2>
          </header>
          <p>
            The COVID-19 tracking survey themes include health and risk behaviours, food security,
            income, work and job security, personal safety concerns, and access to government and
            community support.
          </p>
          <aside>
            <p>Select a country to start &#8594;</p>
          </aside>
        </div>
        <div className={styles.welcomeBottom} />
      </article>
      <nav className={styles.countriesNav}>
        <ul>
          <li>
            <Link to="/NGA">Nigeria</Link>
          </li>
          <li>
            <span>Uganda</span>
          </li>
          <li>
            <Link to="/NGA">Rwanda</Link>
          </li>
          <li>
            <Link to="/NGA">Kenya</Link>
          </li>
          <li>
            <span>Tanzania</span>
          </li>
          <li>
            <Link to="/NGA">South Africa</Link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default HomePage;
