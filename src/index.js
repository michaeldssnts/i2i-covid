import React from 'react';
import ReactDOM from 'react-dom';
import store from './config/store';
import { Provider } from 'react-redux';

import Pages from './pages';
import CountryPage from 'pages/country';

import 'styles/index.scss';

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
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
