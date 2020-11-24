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

const changeFilter = filter => {
  return {
    type: 'CHANGE_FILTER',
    payload: filter,
  };
};

export { createBook, deleteBook, changeFilter };
