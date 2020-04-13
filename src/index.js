import React from 'react';
import ReactDOM from 'react-dom';
import store from './config/store';
import { Provider } from 'react-redux';

import Pages from './pages';

import 'styles/index.scss';

const App = () => {

  return (
    <Provider store={store}>
      <div className="app">
        <Pages className="l-pages" />
      </div>
    </Provider>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
