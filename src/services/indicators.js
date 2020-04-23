import cartoApi from 'utils/carto-api';

const undefinedValues = ['N/A', 'NaN', 'nan', 'REFUSED', '-1'];

export const fetchIndicators = ({ columns, weight, calc, iso }, filters = {}) => {
  let query;

  const filtersQuery = Object.keys(filters)
    .map((filterKey) => {
      const filter = filters[filterKey];

      if (filter && filter.length) {
        return ` AND ${filterKey} IN ('${filter.join("', '")}')`;
      }
      return '';
    })
    .join('');

  if (calc === 'average') {
    const selectQuery = columns
      .map((column) => `AVG(${column}::float * ${weight}) AS ${column}`)
      .join(', ');
    const whereQuery = columns
      .map((column) => `${column} NOT IN ('${undefinedValues.join("', '")}')`)
      .join(' AND ');
    const valuesQuery = columns
      .map((column) => `(a.${column}, '${column}', a.update_date)`)
      .join(', ');

    query = `
      WITH a as (
        SELECT ${selectQuery}, update_date
        FROM covid_data_dev
        WHERE country_iso = '${iso}' ${filtersQuery}
          AND ${whereQuery}
        GROUP BY update_date
      ), b as (
        SELECT t.*
        FROM a
        CROSS JOIN LATERAL (
          VALUES ${valuesQuery}
        ) AS t(answer, indicator, update_date)
      ), c as (
        SELECT b.answer, b.indicator, b.update_date, m.label, b.answer AS value
        FROM b
        LEFT JOIN covid_metadata m ON m.field_name = indicator
      )
      SELECT * FROM c
    `;
  } else {
    const selectQuery = columns.join(', ');
    const valuesQuery = columns
      .map((column) => `(a.${column}, '${column}', a.${weight}, a.update_date)`)
      .join(', ');

    query = `
      WITH a as (
        SELECT ${selectQuery}, ${weight}, update_date
        FROM ${process.env.REACT_APP_DATA_TABLENAME}
        WHERE country_iso = '${iso}' ${filtersQuery}
      ), b as (
        SELECT t.*
        FROM a
        CROSS JOIN LATERAL (
          VALUES ${valuesQuery}
        ) AS t(answer, indicator, ${weight}, update_date)
      ), c as (
        SELECT b.answer, b.indicator, b.${weight}, b.update_date, m.label
        FROM b
        LEFT JOIN covid_metadata m ON m.field_name = indicator
      ), d as (
        SELECT answer, indicator, label, update_date, SUM(${weight}) AS value FROM c
        WHERE answer NOT IN ('${undefinedValues.join("', '")}') AND ${weight} != 'NaN'
        GROUP BY answer, indicator, update_date, label
      )
      SELECT d.answer, d.indicator, d.label, d.update_date, (d.value * 100 / SUM(d.value) OVER(PARTITION BY indicator)) as value FROM d
    `;
  }

  return cartoApi(query);
};

export default { fetchIndicators };
