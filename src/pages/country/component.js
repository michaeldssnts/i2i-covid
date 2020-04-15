import React from 'react';
import proptypes from 'prop-types';
import Navigation from 'components/navigation';

import TabsInfo from './constants';

const CountryPage = ({ current }) => {
  const infoPage = TabsInfo.find((info) => info.category === current);
  return (
    <div className="l-country">
      <Navigation tabs={TabsInfo} currentTab={current} />
      {infoPage.content}
    </div>
  );
};

CountryPage.propTypes = {
  current: proptypes.string.isRequired,
};

export default CountryPage;
