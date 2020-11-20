import React from 'react';

function book(props) {
  const { book } = props;
  return (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
}

export default book;
