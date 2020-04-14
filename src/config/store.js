import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { handleModule } from 'vizzuality-redux-tools';


import router from './router';


const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = router;


const reducers = combineReducers({
  router: routerReducer,
});
const middleware = applyMiddleware(routerMiddleware);
const enhancers = composeWithDevTools(routerEnhancer, middleware);
const store = createStore(reducers, enhancers);

export default store;
