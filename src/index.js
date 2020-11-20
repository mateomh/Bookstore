/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import './assets/style.css';
import Reducers from './reducers/index';

const defaultState = {
  books: [{
    id: 1,
    title: 'Harry Potter',
    category: 'Fantasy',
  },
  {
    id: 2,
    title: 'Lord of the Rings',
    category: 'Fantasy',
  }],
};

const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
