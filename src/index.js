import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './config/store';
import Pages from './pages';
import CountryPage from 'pages/country';

import 'styles/index.scss';

const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="App-header">
          <p>i2i covid</p>
        </header>
        <Pages className="l-pages" />
        <CountryPage />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
