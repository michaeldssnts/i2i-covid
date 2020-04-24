import { schemePaired } from 'd3-scale-chromatic';
import { capitalize } from 'utils/strings';
import { isValidDate, dateFormat } from 'utils/dates';
import { formatNumber, formatPercentage } from 'utils/numbers';

export const getWidgetTheme = ({ calc }) => ({
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
    tickFormatter: (value) => {
      const valueDate = new Date(value);
      if (isValidDate(valueDate)) {
        return dateFormat(valueDate);
      }
      return capitalize(value);
    },
    tickLine: false,
    tick: {
      fontSize: '16px',
      fill: '#3c3c3c',
    },
  },
  yAxis: {
    type: 'number',
    domain: [0, calc === 'average' ? 'auto' : 100],
    tickLine: false,
    axisLine: false,
    tickFormatter: formatPercentage,
    tick: {
      fontSize: '13px',
      fontWeight: 300,
      fill: '#3c3c3c',
    },
    unit: '%',
  },
  tooltip: {
    cursor: false,
    isAnimationActive: false,
    formatter: (value) => {
      if (calc === 'percentage') return `${formatNumber(value)} %`;
      return formatNumber(value);
    },
  },
  legend: {
    align: 'left',
    iconSize: 15,
    iconType: 'square',
    wrapperStyle: {
      bottom: -10,
      left: 80,
    },
    formatter: capitalize,
  },
});

export default { getWidgetTheme };
