import React from 'react';
import PropTypes from 'prop-types';
import Widgets from 'components/widgets';

const CardInfo = ({ title, description, iso, category }) => {
  return (
    <section className="c-card">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-8 m-auto">
            <h2 className="text-center">{title}</h2>
            {description && <p>{description}</p>}
          </div>
        </div>
        <Widgets iso={iso} category={category} />
      </div>
    </section>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  iso: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

CardInfo.defaultProps = {
  description: null,
};

export default CardInfo;
