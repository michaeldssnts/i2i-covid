import cartoApi from 'utils/carto-api';

export const fetchFilter = (column, iso) => {
  const query = `
    SELECT
      ${column}
    FROM ${process.env.REACT_APP_DATA_TABLENAME}
    WHERE country_iso = '${iso}'
    ORDER by ${column} ASC`;
  return cartoApi(query);
};

export default { fetchFilter };
