/* eslint-disable arrow-body-style */

import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const bookList = () => {
  const books = useSelector(state => state.books);
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map(book => (
        <Book key book={book} />
      ))}
    </table>
  );
};

export default bookList;
