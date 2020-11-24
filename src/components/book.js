import React from 'react';

function book(props) {
  const { book, callbackFcn } = props;

  return (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={callbackFcn} value={book.id}>Delete</button></td>
    </tr>
  );
}

export default book;
