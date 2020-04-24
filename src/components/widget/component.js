import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';

import BarChart from 'components/chart/bar';
import LineChart from 'components/chart/line';
import Share from 'components/share';
import { fetchIndicators } from 'services/indicators';
import { getWidgetProps } from './utils.js';

const chartsMap = {
  line: LineChart,
  'multiple-bar': BarChart,
  'multiple-stacked-bar': BarChart,
  'single-bar': BarChart,
  'stacked-bar': BarChart,
};

const Widget = (widgetSpec) => {
  const { title, chart, slug, filters } = widgetSpec;
  const [{ data, loading }] = useAxios(fetchIndicators(widgetSpec, filters));
  const ChartComponent = chartsMap[chart];
  const widgetProps = data && getWidgetProps(data.rows, widgetSpec);

  return (
    <div className="c-widget">
      <h2 className="widget-title">{title}</h2>
      {loading && <p>Loading...</p>}
      {ChartComponent && data && !loading && <ChartComponent {...widgetProps} />}
      <Share slug={slug} />
    </div>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  chart: PropTypes.oneOf([
    'single-bar',
    'multiple-bar',
    'stacked-bar',
    'multiple-stacked-bar',
    'line',
  ]).isRequired,
  slug: PropTypes.string.isRequired,
};

export default Widget;
