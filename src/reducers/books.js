/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
const booksReducer = (state, action) => {
  const { type, payload: book } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return {
        ...state,
        books: state.books.concat(action.payload),
      };
    case 'REMOVE_BOOK':
      const { id } = book;
      const index = state.books.findIndex(book => book.id === id);
      const newBooks = [...state.books];
      newBooks.splice(index, 1);
      const newstate = {
        ...state,
        books: [...newBooks],
      };
      console.log('Reducer');
      console.log(index);
      return newstate;
    default:
      return state;
  }
};

export default booksReducer;
