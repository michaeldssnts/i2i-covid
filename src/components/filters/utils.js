export const parseData = (data, filter) => {
  return data.rows
    .map((row) => row[filter])
    .filter((el, index) => data.rows
      .map((row) => row[filter])
      .indexOf(el) === index)
    .map(e => {
      return { label: e, value: e }
    })
}

export const filtersInfo = (filters, data) =>
  filters.map((filter) => {
    return {
      id: filter.value,
      label: filter.label,
      options: parseData(data, filter.value),
    };
  });
