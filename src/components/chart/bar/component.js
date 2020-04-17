import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// constants
import { WIDGET_THEME } from './constants';

const UIBarChart = ({ data, config, stacked }) => {
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
  const defaultBarProps = {};

  if (stacked) defaultBarProps.stackId = 'a';

  return (
    <div className="pivot-chart">
      <ResponsiveContainer {...layout}>
        <BarChart data={data}>
          <CartesianGrid {...cartesianGrid} />
          <XAxis {...xAxis} dataKey={groupBy} />
          <YAxis {...yAxis} />
          <Tooltip {...tooltip} />
          {categories.map((_category, index) => (
            <Bar
              {...bar}
              {...defaultBarProps}
              dataKey={_category}
              key={_category}
              fill={colors(_category, index)}
            />
          ))}
          <Legend {...legend} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

UIBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  config: PropTypes.shape({
    groupBy: PropTypes.string,
    categories: PropTypes.array,
    colors: PropTypes.func,
  }).isRequired,
  stacked: PropTypes.bool,
};

UIBarChart.defaultProps = {
  data: null,
  stacked: false,
};

export default UIBarChart;
