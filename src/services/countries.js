import cartoApi from 'utils/carto-api';

export const fetchCountries = () => {
  const query = `
    SELECT country,
      country_iso as iso
    FROM covid_data_test
    GROUP BY country, country_iso
    ORDER BY country
  `;

  return cartoApi(query);
};

export default { fetchCountries };
