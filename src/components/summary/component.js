import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';
import { parseData } from './utils.js';
import Widget from 'components/widget';

const Summary = ({ iso, categories }) => {
  const indicators = parseData(categories);
  return (
    <ul className="c-summary">
      {indicators.map(
        ({ name, slug, indicatorsList, widgets }) =>
          widgets &&
          widgets.length > 0 && (
            <li key={slug} className={classnames({ '-active': false })}>
              <h2>{name}</h2>
              <p>{indicatorsList}</p>
              <div className="row">
                {widgets.map(({ widgetSlug, widgetType }) => (
                  <div key={widgetSlug} className="col-6">
                    <Widget chart={widgetType} slug={widgetSlug} />
                  </div>
                ))}
              </div>
              <Link
                to={{
                  type: 'COUNTRY',
                  payload: { iso, category: slug },
                }}
              >
                Know more
              </Link>
            </li>
          )
      )}
    </ul>
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
