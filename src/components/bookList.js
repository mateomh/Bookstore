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
  const [category, setCategory] = useState('All');

  const handleRemoveBook = (event) => {
    const bookId = parseFloat(event.target.value);
    const book = books.find(book => book.id === bookId);
    dispatch(Actions.deleteBook(book));
  };

  const handleFilterChange = (event) => {
    setCategory(event.target.value);
    dispatch(Actions.changeFilter(event.target.value));
  }

  return (
    <>
      <CategoryFilter categories={categories} callback={handleFilterChange} value={category} />
      <table>
        <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        </thead>
        <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} callbackFcn={handleRemoveBook} />
        ))}
        </tbody>
      </table>
    </>
  );
};

bookList.propTypes = { categories: PropTypes.arrayOf(PropTypes.string) };

bookList.defaultProps = {
  categories: [],
};

export default bookList;
