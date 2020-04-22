import cartoApi from 'utils/carto-api';

export const fetchIndicators = (columns, filters = { iso: 'NGA' }) => {
  const selectQuery = columns.join(', ');
  const valuesQuery = columns
    .map((column) => `(a.${column}, '${column}', a.update_date)`)
    .join(', ');

  const query = `
    WITH a as (
      SELECT ${selectQuery}, update_date
      FROM ${process.env.REACT_APP_DATA_TABLENAME}
      WHERE country_iso = '${filters.iso}'
    ), b as (
      SELECT t.*
      FROM a
      CROSS JOIN LATERAL (
        VALUES ${valuesQuery}
      ) AS t(answer, indicator, update_date)
    ), c as (
      SELECT b.*, m.original_name, m.label
      FROM b
      INNER JOIN covid_metadata m ON m.field_name = indicator
    )
    SELECT *, COUNT(answer) AS value FROM c
    WHERE answer NOT IN ('N/A', 'nan', 'REFUSED')
    GROUP BY answer, indicator, update_date, original_name, label
  `;

  return cartoApi(query);
};

export default { fetchIndicators };
