import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';

import BarChart from 'components/chart/bar';
import widgetsSpec from 'data/widgets.json';
import { parseData, fetchDataQuery } from './utils.js';

const Widget = ({ slug }) => {
  const { columns, title } = widgetsSpec.find((widgetSpec) => widgetSpec.slug === slug);
  const [{ data, loading, error }, refetch] = useAxios(fetchDataQuery(columns));

  const parsedData = parseData(data);

  return (
    <div className="c-widget">
      <h2>{title}</h2>
      {/* For now, we only have one type of chart (bar chart) */}
      <BarChart data={parsedData} config={{ groupBy: 'updated_at', categories: columns }} />
    </div>
  );
};

Widget.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Widget;
