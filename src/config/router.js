import { connectRoutes } from 'redux-first-router';

import { NOT_FOUND } from 'redux-first-router';

export const routes = {
  HOME: {
    page: 'home',
    path: '/'
  },
  [NOT_FOUND]: {
    page: 'not-found',
    path: '/404'
  },
  COUNTRY: {
    page: 'country',
    path: '/:iso/#category'
  },
  WIDGET: {
    page: 'widget',
    path: '/widget/:widget_slug?iso=:iso'
  },
};

const options = {
  location: 'router',
};

export default connectRoutes(routes, options);
