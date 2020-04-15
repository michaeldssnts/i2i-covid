import React from 'react';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const HomePage = () => (
  <section className="l-homepage">
    <div className="l-container">
      <article className="l-homepage-welcome">
        <div className="welcome-top" />
        <div className={classnames('welcome-content', 'clearfix')}>
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
        <div className="welcome-bottom" />
      </article>
      <nav className="l-homepage-countries-nav">
        <ul>
          <li>
            <Link to="/NGA/summary">Nigeria</Link>
          </li>
          <li>
            <span>Uganda</span>
          </li>
          <li>
            <Link to="/RWA/summary">Rwanda</Link>
          </li>
          <li>
            <Link to="/KEN/summary">Kenya</Link>
          </li>
          <li>
            <span>Tanzania</span>
          </li>
          <li>
            <Link to="/ZAF/summary">South Africa</Link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default HomePage;
