import widgetsIndicators from 'data/widgets.json';

export const parseData = (categories) => {
  const indicators = categories.reduce((acc, category) => {
    const data = widgetsIndicators.filter((indicator) => indicator.category === category.slug)

    const indicatorsList = data.map((d) => d.title);
    const widgets = data
      .map(
        (d) =>
          d.summary && {
            widgetSlug: d.slug,
            widgetType: d.chart,
            widgetColumns: d.columns,
          }
      )
      .filter(Boolean);
    return [...acc, { name: category.name, slug: category.slug, indicatorsList, widgets }];
  }, []);

  return indicators;
};
