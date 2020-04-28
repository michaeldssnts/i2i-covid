import africanCountriesData from 'data/african-countries.json';

export const getCurrency = (iso) => {
  if (!iso && typeof iso !== 'string') return null;

  const country = africanCountriesData.find((data) => iso === data.iso);

  if (country) return country.currency_iso;
};
