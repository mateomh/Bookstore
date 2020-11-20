/* eslint-disable arrow-body-style */

const createBook = book => {
  return {
    type: 'CREATE_BOOK',
    payload: book,
  };
};

const deleteBook = book => {
  return {
    type: 'REMOVE_BOOK',
    payload: book,
  };
};

export { createBook, deleteBook };
