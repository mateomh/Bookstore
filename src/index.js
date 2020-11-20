import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import createStore from 'redux';
import App from './components/app';
import './assets/style.css';
import Reducers from './reducers/index';

const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
