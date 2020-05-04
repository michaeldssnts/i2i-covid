import groupBy from 'lodash/groupBy';
import map from 'lodash/map';

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

export const parseStackedChart = (data, { category_order }) => {
  const groupedData = groupBy(data, (d) => d.update_date);
  const dates = Object.keys(groupedData);
  const categories = category_order || map(data, 'answer').map((d) => d && d.toString());

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

export const parseMultipleStackedChart = (data, { columns }) => {
  const groupedData = groupBy(data, (d) => d.indicator);
  const widgetData = columns.map((indicator) => {
    const arr = groupedData[indicator];
    const obj = {};

    if (!arr) {
      console.error(`Indicator ${indicator} doesn't exist`);
      return obj;
    }

    arr.forEach(({ answer, label, update_date, value }) => {
      obj[answer] = value;
      obj.indicator = indicator;
      obj.label = label;
      obj.update_date = update_date;
    });

    return obj;
  });

  const categories = columns.map((column) => {
    const category = widgetData.find((d) => d.indicator === column);
    if (category) return category.label;
    return '';
  });

  return {
    config: {
      groupBy: 'update_date',
      categories,
    },
    data: widgetData,
  };
};

export const parseMultipleChart = (data, { calc, category_order }) => {
  let resultData = data;

  if (category_order) {
    resultData = category_order.map((category) => data.find(({ answer }) => category === answer));
  }

  return {
    config: {
      groupBy: calc === 'average' ? 'label' : 'answer',
      categories: ['value'],
    },
    data: resultData,
  };
};

export const getWidgetProps = (data, widgetSpec) => {
  const { calc, chart, exclude_chart, category_order, columns } = widgetSpec;

  // Deciding not to show some values depending on WidgetSpec
  const dataResult = data.filter((d) => !exclude_chart.includes(d.answer));

  if (chart === 'single-bar') {
    return { ...parseSingleChart(dataResult, { calc }), widgetSpec };
  }

  if (chart === 'stacked-bar') {
    return { ...parseStackedChart(dataResult, { category_order }), widgetSpec };
  }

  if (chart === 'multiple-stacked-bar') {
    return { ...parseMultipleStackedChart(dataResult, { columns }), widgetSpec };
  }

  return { ...parseMultipleChart(dataResult, { calc, category_order }), widgetSpec };
};

export default { getWidgetProps };
