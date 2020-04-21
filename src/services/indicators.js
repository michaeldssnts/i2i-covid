import cartoApi from 'utils/carto-api';

export const fetchIndicators = (columns, filters = { iso: 'NGA' }) => {
  const selectQuery = columns.join(',');
  // const whereQuery = columns.map((column) => `${column} != 'N/A'`).join(' AND ');

  const query = `
    SELECT ${selectQuery}
    FROM ${process.env.REACT_APP_DATA_TABLENAME}
    WHERE country_iso = '${filters.iso}'
  `;
  console.log(query);

  return cartoApi(query);
};

export const fetchGroupIndicators = (columns) => {
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

export default { fetchIndicators };
