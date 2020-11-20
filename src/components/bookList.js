/* eslint-disable arrow-body-style */

import React from 'react';
// import { useSelector } from 'react-redux';
import Book from './book';

const books = [{
  id: 1,
  title: 'Harry Potter',
  category: 'Fantasy',
},
{
  id: 2,
  title: 'Lord of the Rings',
  category: 'Fantasy',
}];

const bookList = () => {
  // const books = useSelector(state => state);
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
