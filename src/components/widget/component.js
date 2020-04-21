import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';

import BarChart from 'components/chart/bar';
import LineChart from 'components/chart/line';
import widgetsSpec from 'data/widgets.json';
import { fetchIndicators } from 'services/indicators';
import { parseData } from './utils.js';

const chartsMap = {
  bar: BarChart,
  line: LineChart,
  'stacked-bar': BarChart,
};

const Widget = ({ chart, slug }) => {
  const { columns, title } = widgetsSpec.find((widgetSpec) => widgetSpec.slug === slug);
  const [{ data, loading }] = useAxios(fetchIndicators(columns));
  const ChartComponent = chartsMap[chart];
  const widgetData = data && parseData(data.rows);
  console.log(data);

  return (
    <div className="c-widget">
      <h2>{title}</h2>
      {loading && <p>Loading...</p>}
      {data && !loading && (
        <ChartComponent
          config={{ groupBy: 'update_date', categories: columns }}
          data={widgetData}
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
