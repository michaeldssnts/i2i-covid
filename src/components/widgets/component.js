import React from 'react';
import PropTypes from 'prop-types';

import Chart from 'components/chart';

import info from './constants';
import config from './config';

const Widget = () => {
  const { chartData } = config.parse(info.data);


  return (
    <div className={`c-widget`}>
      <h2>{info.title}</h2>
      <Chart data={chartData} config={config} />
    </div>
  );
};

Widget.propTypes = {

};

Widget.defaultProps = {
  sentence: '',
  chartData: {}
};

export default Widget;
