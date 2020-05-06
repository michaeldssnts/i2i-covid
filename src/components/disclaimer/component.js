import React from 'react';

import info from './constants';

const Disclaimer = () => {
  return (
    <section className="c-disclaimer">
      <p>
        <span>Note: </span>
        {info}
      </p>
    </section>
  );
};

export default Disclaimer;
