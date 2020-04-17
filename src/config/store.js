import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import routesMap from 'config/router';
import pageReducer from 'modules/page/reducer';

export default function configureStore(preloadedState = {}) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);
  const rootReducer = combineReducers({
    location: reducer,
    page: pageReducer,
  });
  const middlewares = applyMiddleware(middleware);
  const enhancers = composeWithDevTools(enhancer, middlewares);
  const store = createStore(rootReducer, preloadedState, enhancers);

  return { store };
}
