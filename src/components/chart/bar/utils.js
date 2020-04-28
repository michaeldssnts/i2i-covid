import { colors } from 'components/chart/constants';
import { capitalize } from 'utils/strings';
import { isValidDate, dateFormat } from 'utils/dates';
import { formatNumber, formatPercentage } from 'utils/numbers';
import { getCurrency } from 'utils/currency';

const defaultLegend = {
  iconSize: 15,
  iconType: 'circle',
  formatter: capitalize,
};

export const getWidgetTheme = ({ calc, gridspace, units, iso }) => {
  let legend = { ...defaultLegend };

  if (gridspace === 'one') {
    legend = {
      ...defaultLegend,
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'middle',
      width: 300,
      wrapperStyle: {
        paddingLeft: 30,
      },
    };
  }

  return {
    layout: { width: '100%', height: 500 },
    cartesianGrid: {
      strokeDasharray: '5 4',
      stroke: '#001D22',
      opacity: 0.2,
      vertical: false,
    },
    colors: (category, index) => colors(index),
    xAxis: {
      axisLine: false,
      tickFormatter: (value) => {
        const valueDate = new Date(value);
        if (isValidDate(valueDate)) {
          return dateFormat(valueDate);
        }
        return capitalize(value);
      },
      tickLine: false,
      tick: {
        fontSize: '13px',
        fill: '#022732',
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
        fill: '#022732',
      },
      unit: units === 'currency' ? getCurrency(iso) : units,
    },
    tooltip: {
      cursor: false,
      isAnimationActive: false,
      formatter: (value) => {
        if (calc === 'percentage') return `${formatNumber(value)} %`;
        return formatNumber(value);
      },
    },
    legend,
  };
};

export default { getWidgetTheme };
