import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';
import Hero from 'components/hero';
import Footer from 'components/footer';

const Resources = ({ page }) => (
  <div className="l-resources">
    <Header />
    <Hero page={page} />
    <div className="resources-content">
      <div className="container resources-content-decoration" />
      <div className="container">
        <div className="row">
          <div className="col">
            <iframe
              title="Resources content"
              src="/resources.html"
              frameBorder="0"
              width="100%"
              height="1120px"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

Resources.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Resources;
