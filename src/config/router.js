import { connectRoutes } from 'redux-first-router';

import { NOT_FOUND } from 'redux-first-router';

export const routes = {
//   HOME: {
//     page: 'home',
//     path: '/'
//   },
  [NOT_FOUND]: {
    page: 'not-found',
    path: '/404'
  },
  ANALYSIS: {
    page: 'analysis',
    path: '/analysis/:country'
  }
};

const options = {
  location: 'router',
};

export default connectRoutes(routes, options);
