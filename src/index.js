/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import AppStyles from './components/styles/app.module.css';
import Reducers from './reducers/index';
import BooksApi from './modules/apicall';

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

BooksApi.getBooks();

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
