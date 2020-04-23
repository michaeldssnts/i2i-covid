import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import uniq from 'lodash/uniq';

export const parseSingleChart = (data) => {
  const groupedData = groupBy(data, (d) => d.update_date);
  const dates = Object.keys(groupedData);
  const widgetData = dates.map((date) => {
    const arr = groupedData[date];
    const obj = {
      update_date: date,
    };

    arr.forEach(({ value, answer }) => {
      obj[answer] = value;
    });

    return obj;
  });

  const categories = map(data, 'answer').map((d) => d.toString());

  return {
    config: {
      groupBy: 'update_date',
      categories,
    },
    data: widgetData,
  };
};

export const parseStackedChart = (data) => {
  const groupedData = groupBy(data, (d) => d.update_date);
  const dates = Object.keys(groupedData);
  const widgetData = dates.map((date) => {
    const arr = groupedData[date];
    const obj = {
      update_date: date,
    };

    arr.forEach(({ value, answer }) => {
      obj[answer] = value;
    });

    return obj;
  });

  const categories = map(data, 'answer').map((d) => d.toString());

  return {
    config: {
      groupBy: 'update_date',
      categories,
    },
    data: widgetData,
  };
};

export const parseMultipleStackedChart = (data) => {
  const groupedData = groupBy(data, (d) => d.indicator);
  const indicators = Object.keys(groupedData);
  const widgetData = indicators.map((indicator) => {
    const arr = groupedData[indicator];
    const obj = {};

    arr.forEach(({ answer, label, update_date, value }) => {
      obj[answer] = value;
      obj.indicator = indicator;
      obj.label = label;
      obj.update_date = update_date;
    });

    return obj;
  });
  console.log(widgetData)

  const categories = uniq(map(data, 'answer').map((d) => d.toString()));
  console.log(categories)

  return {
    config: {
      groupBy: 'update_date',
      categories: ['YES', 'NO'],
    },
    data: widgetData,
  };
};

export const parseMultipleChart = (data) => ({
  config: {
    groupBy: 'answer',
    categories: ['value'],
  },
  data,
});

export const getWidgetProps = (data, chartType) => {
  if (chartType === 'single-bar') {
    return { ...parseSingleChart(data), chartType };
  }

  if (chartType === 'stacked-bar') {
    return { ...parseStackedChart(data), chartType };
  }

  if (chartType === 'multiple-stacked-bar') {
    return { ...parseMultipleStackedChart(data), chartType };
  }

  return { ...parseMultipleChart(data), chartType };
};

export default { getWidgetProps };
