import cartoApi from 'utils/carto-api';

export const fetchAllData = () => {
  const query = `
    SELECT
      *
    FROM ${process.env.REACT_APP_DATA_TABLENAME}`;

  return cartoApi(query);
};

export default { fetchAllData };
