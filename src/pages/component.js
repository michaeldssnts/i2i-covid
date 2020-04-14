import React from 'react';
import PropTypes from 'prop-types';

import Home from 'pages/home';
import Country from 'pages/country';
import Widget from 'pages/widget';
import NotFound from 'pages/not-found';


const Pages = ({ router: { type, routesMap } }) => {
  const { page } = routesMap[type];
  return (
    <>
      {Object.keys(routesMap).map(route => page === routesMap[route].page && (
        (page === 'home' && <Home key={page}/>)
        || (page === 'country' && <Country key={page} />)
        || (page === 'widget' && <Widget key={page} />)
        || (page === 'not-found' && <NotFound key={page} />)
      ))}
    </>
  );
};

Pages.propTypes = {
  router: PropTypes.shape({
    type: PropTypes.string,
    routesMap: PropTypes.shape({})
  }).isRequired,

};

export default Pages;
