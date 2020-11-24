import { combineReducers } from 'redux';
import filterReducer from './filter';
import booksReducer from './books';

const allReducer = combineReducers({
  filter: filterReducer,
  books: booksReducer,
});

export default allReducer;
