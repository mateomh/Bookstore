/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
const booksReducer = (state, action) => {
  const { type, payload: book } = action;
  const newBooks = [...state.books];
  switch (type) {
    case 'CREATE_BOOK':
      return {
        ...state,
        books: newBooks.concat(book),
      };
    case 'REMOVE_BOOK':
      const { id } = book;
      const index = newBooks.findIndex(book => book.id === id);
      newBooks.splice(index, 1);
      const newstate = {
        ...state,
        books: [...newBooks],
      };
      return newstate;
    default:
      return state;
  }
};

export default booksReducer;
