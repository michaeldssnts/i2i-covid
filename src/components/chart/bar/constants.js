import { format } from 'd3-format';
import { schemePaired } from 'd3-scale-chromatic';

export const WIDGET_THEME = {
  layout: { width: '100%', height: 500 },
  cartesianGrid: {
    strokeDasharray: '5 4',
    stroke: '#d8d8d8',
    vertical: false,
  },
  colors: (category, index) =>
    category === 'Others' ? 'rgba(60, 60, 60, .5)' : schemePaired[index],
  xAxis: {
    axisLine: {
      stroke: '#d8d8d8',
    },
    tickLine: false,
    tick: {
      fontSize: '16px',
      fill: '#3c3c3c',
    },
  },
  yAxis: {
    type: 'number',
    tickFormatter: (tick) => format('~s')(tick),
    domain: [0, 'auto'],
    tickLine: false,
    axisLine: false,
    tick: {
      fontSize: '13px',
      fontWeight: 300,
      fill: '#3c3c3c',
    },
  },
  tooltip: {
    cursor: false,
    isAnimationActive: false,
    formatter: (value) => format('.4s')(value),
  },
  legend: {
    align: 'left',
    iconSize: 15,
    iconType: 'square',
    wrapperStyle: {
      bottom: -10,
      left: 80,
    },
  },
  bar: {
    minBarSize: 40,
    maxBarSize: 120,
  },
};

export default { WIDGET_THEME };
