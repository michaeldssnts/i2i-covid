import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';

// import Chart from 'components/chart';
import widgetsSpec from 'data/widgets.json';
import { fetchDataQuery } from './utils.js';

const Widget = ({ slug }) => {
  const { columns, title } = widgetsSpec.find((widgetSpec) => widgetSpec.slug === slug);
  const [{ data, loading, error }, refetch] = useAxios(fetchDataQuery(columns));

  console.log(data);

  return (
    <div className="c-widget">
      <h2>{title}</h2>
      {/*<Chart data={chartData} config={config} /> */}
    </div>
  );
};

Widget.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Widget;
