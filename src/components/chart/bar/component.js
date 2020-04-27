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
import { getWidgetTheme } from './utils';

const UIBarChart = ({ data, config, widgetSpec }) => {
  const { calc, chart: chartType, gridspace } = widgetSpec;
  const {
    layout,
    cartesianGrid,
    xAxis,
    yAxis,
    tooltip,
    legend,
    colors: defaultColors,
    bar,
  } = getWidgetTheme({ calc, gridspace });
  const { groupBy, categories, colors: colorsConfig } = config;
  const colors = colorsConfig || defaultColors;
  const defaultBarProps = {};

  if (chartType === 'stacked-bar' || chartType === 'multiple-stacked-bar') {
    defaultBarProps.stackId = 'a';
  }

  return (
    <div className="c-chart">
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
          {chartType !== 'multiple-bar' && <Legend {...legend} />}
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
  chartType: PropTypes.oneOf(['single-bar', 'multiple-bar', 'stacked-bar', 'multiple-stacked-bar']),
  widgetSpec: PropTypes.shape({
    calc: PropTypes.string,
    chart: PropTypes.string,
  }).isRequired,
};

UIBarChart.defaultProps = {
  data: null,
  chartType: 'single-bar',
};

export default UIBarChart;
