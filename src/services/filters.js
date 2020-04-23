import cartoApi from 'utils/carto-api';

export const fetchFilters = () => {
  const query = `
    SELECT DISTINCT
      sex,
      urbancity,
      age_cat
    FROM ${process.env.REACT_APP_DATA_TABLENAME}
    ORDER BY sex, urbancity, age_cat`;

  return cartoApi(query);
};

export default { fetchFilters };
