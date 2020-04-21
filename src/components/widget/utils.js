import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import sumBy from 'lodash/sumBy';

export const parseSingleChart = (data) => {
  const groupedData = groupBy(data, (d) => d.update_date);
  const dates = Object.keys(groupedData);
  const widgetData = dates.map((date) => {
    const arr = groupedData[date];
    const obj = {
      update_date: date,
    };

    arr.forEach(({ original_name, value }) => {
      obj.name = original_name;
      obj.value = value;
    });

    return obj;
  });

  return {
    config: {
      dataKey: 'name',
      groupBy: 'name',
      categories: ['value'],
    },
    data: widgetData,
  };
};

export const parseMultipleChart = (data) => {
  const groupedData = groupBy(data, (d) => d.update_date);
  const dates = Object.keys(groupedData);
  const widgetData = dates.map((date) => {
    const arr = groupedData[date];
    const obj = {
      update_date: date,
    };

    arr.forEach(({ answer, value }) => {
      obj[answer] = value;
    });

    return obj;
  });

  let categories = [];

  categories = map(data, 'answer');

  return {
    config: {
      dataKey: 'update_date',
      categories,
    },
    data: widgetData,
  };
};

export const getWidgetProps = (data, chartType) => {
  if (chartType === 'single-bar') {
    return parseSingleChart(data);
  }

  return parseMultipleChart(data);
};

export default { getWidgetProps };
