/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import AppStyles from './components/styles/app.module.css';
import Reducers from './reducers/index';

const defaultState = {
  books: [{
    id: Math.random(),
    title: 'Harry Potter',
    category: 'Fantasy',
  },
  {
    id: Math.random(),
    title: 'Lord of the Rings',
    category: 'Fantasy',
  }],
  filter: 'All',
};

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const testRender = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div className={AppStyles.panelBg}>
        <App />
      </div>
    </Provider>,
    document.getElementById('root'),
  );
  document.getElementById('root').classList.add(AppStyles.BookstoreCMS);
};

store.subscribe(testRender);

testRender();
