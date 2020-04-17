import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './config/store';
import Pages from './pages';

import 'styles/index.scss';

const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Pages className="l-pages" />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
