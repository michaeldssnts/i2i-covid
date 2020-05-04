import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import configureStore from './config/store';
import Pages from './pages';

import 'styles/index.scss';

const { store } = configureStore();

const App = () => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTCIS_TOKEN}`, { debug: true });
  });
  return (
    <Provider store={store}>
      <Pages className="l-pages" />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
