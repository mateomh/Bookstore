/* eslint-disable */

import React from 'react';
import { useStore, useDispatch } from 'react-redux';
import Book from './book';
import * as Actions from '../actions/index';

const bookList = () => {
  // const books = useSelector(state => state.books);
  const store = useStore();
  const dispatch = useDispatch();
  const { books } = store.getState();

  const handleRemoveBook = (event) => {
    const bookId = parseFloat(event.target.value);
    const book = books.find(book => book.id === bookId);
    dispatch(Actions.deleteBook(book));
  };

  return (
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
  );
};

export default bookList;
