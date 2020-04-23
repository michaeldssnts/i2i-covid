import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';

import BarChart from 'components/chart/bar';
import LineChart from 'components/chart/line';
import Share from 'components/share';
import { fetchIndicators } from 'services/indicators';
import { getWidgetProps } from './utils.js';

const chartsMap = {
  bar: BarChart,
  line: LineChart,
  'multiple-bar': BarChart,
  'single-bar': BarChart,
  'stacked-bar': BarChart,
};

const Widget = (widgetSpec) => {
  const { columns, title, chart: chartType, slug } = widgetSpec;
  const [{ data, loading }] = useAxios(fetchIndicators(columns));
  const ChartComponent = chartsMap[chartType];
  const widgetProps = data && getWidgetProps(data.rows, widgetSpec);

  return (
    <div className="c-widget">
      <h2>{title}</h2>
      {loading && <p>Loading...</p>}
      {data && !loading && <ChartComponent {...widgetProps} />}
      <Share slug={slug} />
    </div>
  );
};

Widget.propTypes = {
  widgetSpec: PropTypes.shape({
    chart: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
};

export default Widget;
