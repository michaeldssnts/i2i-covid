import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import { parseData } from './utils.js';
import Widget from 'components/widget';

const Summary = ({ iso, categories }) => {
  const indicators = parseData(categories);
  return (
    <section className="c-summary">
      <div className="container">
        {indicators.map(
          ({ name, slug, indicatorsList, widgets }) =>
            widgets &&
            widgets.length > 0 && (
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-12">
                  <article key={slug} className="summary-content">
                    <div className="row justify-content-center">
                      <div className="col-sm-12 col-md-12">
                        <h2>{name}</h2>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-sm-10 col-md-10">
                        <p>{indicatorsList}</p>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      {widgets.map(({ widgetSlug, widgetType }) => (
                        <div key={widgetSlug} className="col-sm-12 col-md-6">
                          <Widget chart={widgetType} slug={widgetSlug} />
                        </div>
                      ))}
                    </div>
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
            )
        )}
      </div>
    </section>
  );
};

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  iso: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Summary;
