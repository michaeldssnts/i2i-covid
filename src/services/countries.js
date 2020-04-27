import cartoApi from 'utils/carto-api';

export const fetchCountries = () => {
  const query = `
    SELECT country,
      country_iso as iso
    FROM ${process.env.REACT_APP_DATA_TABLENAME}
    GROUP BY country, country_iso
    ORDER BY country
  `;

  return cartoApi(query);
};

export default { fetchCountries };
