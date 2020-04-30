import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';

import Chart from 'components/chart';
import Share from 'components/share';
import Spinner from 'components/spinner';
import { fetchIndicators } from 'services/indicators';
import { getWidgetProps } from './utils.js';

const Widget = (widgetSpec) => {
  const { title, slug, filters, hint } = widgetSpec;
  const [{ data, loading, error }] = useAxios(fetchIndicators(widgetSpec, filters));
  const widgetProps = data && getWidgetProps(data.rows, widgetSpec);

  const activeFilters = Object.values(filters)
    .filter((filter) => filter.length > 0)
    .flat();

  // For widget debugging
  if (error) console.error(`For widget ${title}`, error.response.data);

  return (
    <div className="c-widget">
      <div className="widget-header">
        <h2 className="h3">{title}</h2>
        <p className="small">{hint}</p>
      </div>
      {loading && <Spinner loading />}
      {!loading && error && <div className="alert alert-warning">Something was wrong.</div>}
      {!loading && data && !error && (
        <>
          <Chart {...widgetProps} />
          <Share slug={slug} />
        </>
      )}
      {!loading && !data && !error && (
        <div className="alert alert-info">There is no data for this widget.</div>
      )}
    </div>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Widget;
