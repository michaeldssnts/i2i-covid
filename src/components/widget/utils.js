import cartoApi from 'utils/carto-api';

export const fetchDataQuery = (columns) => {
  const groupingQuery = columns.map((column) => `GROUPING(${column}) grouping_${column}`).join(',');
  const selectQuery = columns.join(',');
  const groupByQuery = columns.map((column) => `(${column})`).join(',');
  const valuesQuery = columns.map((column) => `(r.${column}, '${column}', r.count)`).join(',');

  const query = `
    WITH r AS (
      SELECT
        ${groupingQuery},
        ${selectQuery},
        COUNT(cartodb_id)
      FROM covid_data_test
      GROUP BY GROUPING SETS (
        ${groupByQuery}
      )
    ),
    f AS (
      SELECT t.*
      FROM r
        CROSS JOIN LATERAL (
          VALUES ${valuesQuery}
        ) AS t(response, indicator, valuesw)
      WHERE response != 'N/A'
    )
    SELECT *,
      sum(valuesw) OVER (partition BY indicator) AS total
    FROM f
  `;

  return cartoApi(query);
};

export default { fetchDataQuery };
