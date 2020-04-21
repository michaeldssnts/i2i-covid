import groupBy from 'lodash/groupBy';
import map from 'lodash/map';

export const getWidgetProps = (data, chartType) => {
  const groupedData = groupBy(data, (d) => d.update_date);
  const dates = Object.keys(groupedData);
  const widgetData = dates.map((date) => {
    const arr = groupedData[date];
    const obj = {
      update_date: date,
    };

    arr.forEach(({ answer, indicator, value }) => {
      if (chartType === 'single-bar') {
        obj[indicator] = value;
      } else {
        obj[answer] = value;
      }
    });

    return obj;
  });

  console.log(widgetData)

  const categories = map(data, 'answer');

  return {
    config: {
      dataKey: 'update_date',
      categories,
    },
    data: widgetData,
  };
};

export default { getWidgetProps };
