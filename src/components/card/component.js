import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';
import Filters from 'components/filters';
import Widgets from 'components/widgets';

const CardInfo = ({ title, iso, category }) => {
  return (
    <div className="c-card">
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Filters />
      <Widgets category={category} />
      <div className="widgets">widgets</div>
    </div>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  iso: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CardInfo;
