/* eslint-disable */

import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './book';
import * as Actions from '../actions/index';
import CategoryFilter from './categoryfilter';

const bookList = props => {
  const { categories } = props;
  const store = useStore();
  const dispatch = useDispatch();
  const { books } = store.getState();
  console.log(books)
  const handleRemoveBook = (event) => {
    const bookId = parseFloat(event.target.value);
    const book = books.find(book => book.id === bookId);
    dispatch(Actions.deleteBook(book));
  };

  return (
    <>
      <CategoryFilter categories={categories} />
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
