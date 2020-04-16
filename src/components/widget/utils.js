import cartoApi from 'utils/carto-api';

export const fetchDataQuery = (columns) => {
  const groupingQuery = columns.map(column => `GROUPING(${column}) AS ${column}_group`).join(',');
  const selectQuery = columns.join(',');
  const whereQuery = columns.map(column => `${column} != 'N/A'`).join(' OR ');
  const groupByQuery = columns.map(column => `(${column})`).join(',');
  const query = `
    SELECT ${groupingQuery},
      ${selectQuery},
      COUNT(cartodb_id)
    FROM covid_data_test
    GROUP BY
      GROUPING SETS (
        ${groupByQuery}
      )
  `;

  console.log(query);

  return cartoApi(query);
};

export default { fetchDataQuery };
