import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import Widgets from 'components/widgets';

const Summary = ({ iso, categories }) => (
  <section className="c-summary">
    <div className="container">
      {categories.map(({ name, slug }) => (
        <div key={slug} className="row justify-content-center">
          <div className="col-sm-12 col-md-12">
            <article className="summary-content">
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-8">
                  <h2 className="title">{name}</h2>
                  {/* TODO: Indicators list from metadata */}
                  {/* <p>{indicatorsList}</p> */}
                </div>
              </div>

              <Widgets iso={iso} category={slug} filterBySummary={true} />

              <div className="row justify-content-center">
                <div className="col-auto">
                  <aside className="summary-button">
                    <Link
                      to={{
                        type: 'COUNTRY',
                        payload: { iso, category: slug },
                      }}
                    >
                      Know more
                    </Link>
                  </aside>
                </div>
              </div>
            </article>
          </div>
        </div>
      ))}
    </div>
  </section>
);

Summary.propTypes = {
  iso: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Summary;
