import cartoApi from 'utils/carto-api';

export const fetchCategories = () => {
  const query = `
    SELECT
      name,
      slug,
      description
    FROM covid_categories
    ORDER by category_order ASC`;
  return cartoApi(query);
};

export default { fetchCategories };
