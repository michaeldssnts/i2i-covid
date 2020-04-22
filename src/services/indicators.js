import cartoApi from 'utils/carto-api';

export const fetchIndicators = (columns, filters = { iso: 'NGA' }) => {
  const selectQuery = columns.join(', ');
  const valuesQuery = columns
    .map((column) => `(a.${column}, '${column}', a.weight_ind, a.update_date)`)
    .join(', ');

  const query = `
    WITH a as (
      SELECT ${selectQuery}, weight_ind, update_date
      FROM ${process.env.REACT_APP_DATA_TABLENAME}
      WHERE country_iso = '${filters.iso}'
    ), b as (
      SELECT t.*
      FROM a
      CROSS JOIN LATERAL (
        VALUES ${valuesQuery}
      ) AS t(answer, indicator, weight_ind, update_date)
    ), c as (
      SELECT b.answer, b.indicator, b.weight_ind, b.update_date, m.original_name, m.label
      FROM b
      INNER JOIN covid_metadata m ON m.field_name = indicator
    ), d as (
      SELECT answer, indicator, original_name, label, update_date, SUM(weight_ind) AS value FROM c
      WHERE answer NOT IN ('N/A', 'nan', 'REFUSED') AND weight_ind != 'NaN'
      GROUP BY answer, indicator, update_date, original_name, label
    )
    SELECT *, (value * 100 / SUM(value) OVER()) as percent FROM d
  `;

  return cartoApi(query);
};

export default { fetchIndicators };
