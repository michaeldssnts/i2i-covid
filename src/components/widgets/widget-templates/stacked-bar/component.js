import React, { useEffect } from 'react';
import Chart from 'components/recharts';
import sortBy from 'lodash/sortBy';
import { format } from 'd3-format';

import config from './config';

const numberFormat = format(',.2f');

const Bars = ({
  data
}) => {

  if (!data) return null;
  const { chartConfig, chartData } = config.parse(data, id);

  console.log(chartConfig, chartData, 'widget')
  return (
    <Fragment>
      <div className="c-population-trends-widget">
        <Chart
          data={[chartData]}
          config={chartConfig}
        />
        <div id={`widget-legend-${id}`} />
      </div>
    </Fragment>
  );
};

Bars.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.array.isRequired
};

export default Bars;
