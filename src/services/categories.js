import cartoApi from 'utils/carto-api';

export const fetchCategories = () => {
  const query = `
    SELECT
      name,
      slug
    FROM covid_categories
    ORDER by name`;
  return cartoApi(query);
};

export default { fetchCategories };
