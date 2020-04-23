import React from 'react';
import PropTypes from 'prop-types';
import Widgets from 'components/widgets';

const CardInfo = ({ title, iso, category }) => {
  return (
    <div className="c-card">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        <Widgets iso={iso} category={category} />
      </div>
    </div>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  iso: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CardInfo;
