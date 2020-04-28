import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import uniq from 'lodash/uniq';

export const parseSingleChart = (data, { calc }) => {
  const groupedData = groupBy(data, (d) => d.update_date);
  const dates = Object.keys(groupedData);
  const widgetData = dates.map((date) => {
    const arr = groupedData[date];
    const obj = {
      update_date: date,
    };

    arr.forEach(({ value, answer, label }) => {
      obj[calc === 'average' ? label : answer] = value;
    });

    return obj;
  });

  let categories = map(data, calc === 'average' ? 'label' : 'answer').map((d) => d.toString());

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
      yAxis: {
        domain: [0, 100],
      },
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

  const categories = uniq(map(data, 'answer').map((d) => d.toString()));

  return {
    config: {
      groupBy: 'update_date',
      categories,
    },
    data: widgetData,
  };
};

export const parseMultipleChart = (data, { calc }) => {
  return {
    config: {
      groupBy: calc === 'average' ? 'label' : 'answer',
      categories: ['value'],
    },
    data,
  };
};

export const getWidgetProps = (data, widgetSpec) => {
  const { calc, chart, exclude_chart } = widgetSpec;

  // Deciding not to show some values depending on WidgetSpec
  const dataResult = data.filter((d) => !exclude_chart.includes(d.answer));

  if (chart === 'single-bar') {
    return { ...parseSingleChart(dataResult, { calc }), widgetSpec };
  }

  if (chart === 'stacked-bar') {
    return { ...parseStackedChart(dataResult), widgetSpec };
  }

  if (chart === 'multiple-stacked-bar') {
    return { ...parseMultipleStackedChart(dataResult), widgetSpec };
  }

  return { ...parseMultipleChart(dataResult, { calc }), widgetSpec };
};

export default { getWidgetProps };
