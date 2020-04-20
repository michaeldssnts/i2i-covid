import cartoApi from 'utils/carto-api';
import groupBy from 'lodash/groupBy';

export const fetchDataQuery = (columns) => {
  const groupingQuery = columns.map((column) => `GROUPING(${column}) grouping_${column}`).join(',');
  const selectQuery = columns.join(',');
  const groupByQuery = columns.map((column) => `(${column})`).join(',');
  const valuesQuery = columns
    .map((column) => `(r.${column}, '${column}', r.count, r.update_date)`)
    .join(',');

  const query = `
    WITH r AS (
      SELECT
        ${groupingQuery},
        ${selectQuery},
        COUNT(cartodb_id),
        update_date
      FROM covid_data_test
      GROUP BY GROUPING SETS (
        ${groupByQuery}
      ),
      update_date
    ),
    f AS (
      SELECT t.*
      FROM r
        CROSS JOIN LATERAL (
          VALUES ${valuesQuery}
        ) AS t(response, indicator, valuesw, update_date)
      WHERE response != 'N/A'
    )
    SELECT *,
      sum(valuesw) OVER (partition BY indicator) AS total
    FROM f
  `;
  return cartoApi(query);
};

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

export default { fetchDataQuery, parseData };
