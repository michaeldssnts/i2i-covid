export const capitalize = (str) => {
  if (typeof str !== 'string') return str;
  const value = str.toLowerCase();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export default { capitalize };
