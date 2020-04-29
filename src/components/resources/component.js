import React from 'react';
import NavLink from 'redux-first-router-link';
import Button from 'components/button';

const Resources = () => (
  <div className="c-resources">
    <Button className="-border-color-1">
      <NavLink
        to={{ type: 'RESOURCES' }}
        exact={true}
        strict={true}
      >
        Resources
      </NavLink>
    </Button>
  </div>
);

export default Resources;
