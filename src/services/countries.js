import cartoApi from 'utils/carto-api';

export const fetchCountries = () => {
  const query = `
    SELECT
      country,
      iso
    FROM country_borders_gadm36
    ORDER by country`;

  return cartoApi(query);
};

export default { fetchCountries };
