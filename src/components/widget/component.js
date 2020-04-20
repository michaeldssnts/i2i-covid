import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';

import BarChart from 'components/chart/bar';
import LineChart from 'components/chart/line';
import widgetsSpec from 'data/widgets.json';
import { parseData, fetchDataQuery } from './utils.js';

const chartsMap = {
  bar: BarChart,
  line: LineChart,
  'stacked-bar': BarChart,
};

const Widget = ({ chart, slug }) => {
  const { columns, title } = widgetsSpec.find((widgetSpec) => widgetSpec.slug === slug);
  const [{ data, loading }] = useAxios(fetchDataQuery(columns));
  const ChartComponent = chartsMap[chart];

  return (
    <div className="c-widget">
      <h2>{title}</h2>
      {loading && <p>Loading...</p>}
      {/* For now, we only have one type of chart (bar chart) */}
      {data && !loading && (
        <ChartComponent
          config={{ groupBy: 'update_date', categories: columns }}
          data={parseData(data.rows)}
        />
      )}
    </div>
  );
};

Widget.propTypes = {
  chart: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

Widget.defaultProps = {
  chart: 'bar',
};

export default Widget;
