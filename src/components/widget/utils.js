import cartoApi from 'utils/carto-api';
import groupBy from 'lodash/groupBy';

export const parseData = (data) => {
  const groupedData = groupBy(data, (d) => d.update_date);
  const dates = Object.keys(groupedData);
  const result = dates.map((date) => {
    const arr = groupedData[date];
    const obj = {
      update_date: date,
    };

    arr.forEach(({ indicator, total }) => {
      obj[indicator] = total;
    });

    return obj;
  });

  return result;
};

export default { parseData };
