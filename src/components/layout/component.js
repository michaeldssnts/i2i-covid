import React from 'react';
import PropTypes from 'prop-types';

import Hero from 'components/hero';
import Navigation from 'components/navigation';

const Layout = ({ iso, info, current }) => {
  const infoPage = info.find((info) => info.category === current);
  return (
    <div className="c-layout">
      <Hero iso={iso} />
      <Navigation tabs={info} currentTab={current} />
      {infoPage.content}
    </div>
  );
};

Layout.propTypes = {
  iso: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      iso: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  current: PropTypes.string.isRequired,
};

export default Layout;
