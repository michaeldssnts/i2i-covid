import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// constants
import { WIDGET_THEME } from './constants';

const UILineChart = ({ data, config }) => {
  const {
    layout,
    cartesianGrid,
    xAxis,
    yAxis,
    tooltip,
    legend,
    colors: defaultColors,
    bar,
  } = WIDGET_THEME;
  const { groupBy, categories, colors: colorsConfig } = config;
  const colors = colorsConfig || defaultColors;
  const defaultLineProps = { type: 'linear' };

  return (
    <div className="pivot-chart">
      <ResponsiveContainer {...layout}>
        <LineChart data={data}>
          <CartesianGrid {...cartesianGrid} />
          <XAxis {...xAxis} dataKey={groupBy} />
          <YAxis {...yAxis} />
          <Tooltip {...tooltip} />
          {categories.map((_category, index) => (
            <Line
              {...bar}
              {...defaultLineProps}
              dataKey={_category}
              key={_category}
              stroke={colors(_category, index)}
            />
          ))}
          <Legend {...legend} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

UILineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  config: PropTypes.shape({
    groupBy: PropTypes.string,
    categories: PropTypes.array,
    colors: PropTypes.func,
  }).isRequired,
};

UILineChart.defaultProps = {
  data: null,
};

export default UILineChart;
