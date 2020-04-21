import cartoApi from 'utils/carto-api';

export const fetchCategories = () => {
  const query = `
    SELECT
      name,
      slug
    FROM covid_categories`;
  return cartoApi(query);
};

export default { fetchCategories };
