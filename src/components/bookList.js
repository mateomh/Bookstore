/* eslint-disable */

import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Book from './book';
import * as Actions from '../actions/index';
import CategoryFilter from './categoryfilter';

const bookList = props => {
  const { categories } = props;
  const store = useStore();
  const dispatch = useDispatch();
  const { books } = store.getState();
  let filterBooks = books;
  const [category, setCategory] = useState('All');

  const handleRemoveBook = (event) => {
    const bookId = parseFloat(event.target.value);
    const book = books.find(book => book.id === bookId);
    dispatch(Actions.deleteBook(book));
  };

  const handleFilterChange = (event) => {
    setCategory(event.target.value);
    dispatch(Actions.changeFilter(event.target.value));
  };


  if (category !== 'All') {
    filterBooks = books.filter(book => book.category === category)
  }

  return (
    <>
      <CategoryFilter categories={categories} callback={handleFilterChange} value={category} />
      {filterBooks.map(book => (
        <Book key={book.id} book={book} callbackFcn={handleRemoveBook} />
      ))}
    </>
  );
};

bookList.propTypes = { categories: PropTypes.arrayOf(PropTypes.string) };

bookList.defaultProps = {
  categories: [],
};

export default bookList;
