import groupBy from 'lodash/groupBy';
import map from 'lodash/map';

export const parseSingleChart = (data) => {
  const groupedData = groupBy(data, (d) => d.update_date);
  const dates = Object.keys(groupedData);
  const widgetData = dates.map((date) => {
    const arr = groupedData[date];
    const obj = {
      update_date: date,
    };

    arr.forEach(({ percent, answer }) => {
      obj[answer] = percent;
    });

    return obj;
  });

  const categories = map(data, 'answer').map((d) => d.toString());

  return {
    config: {
      groupBy: 'update_date',
      categories,
    },
    chartType: 'single-bar',
    data: widgetData,
  };
};

export const parseMultipleChart = (data) => {
  return {
    config: {
      groupBy: 'answer',
      categories: ['percent'],
    },
    chartType: 'multiple-bar',
    data,
  };
};

export const getWidgetProps = (data, widgetSpec) => {
  console.log(data, widgetSpec);
  const { chart } = widgetSpec;
  if (chart === 'single-bar') {
    return parseSingleChart(data);
  }

  return parseMultipleChart(data);
};

export default { getWidgetProps };
