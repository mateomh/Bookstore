/* eslint-disable */

import React from 'react';
import { useStore } from 'react-redux';
import Book from './book';

const bookList = () => {
  // const books = useSelector(state => state.books);
  const store = useStore();
  const { books } = store.getState();
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
        <Book key={book.id} book={book} />
      ))}
      </tbody>
    </table>
  );
};

export default bookList;
