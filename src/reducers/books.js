/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
const defaultState = [{
  id: Math.random(),
  title: 'Harry Potter',
  category: 'Sci-Fi',
},
{
  id: Math.random(),
  title: 'Lord of the Rings',
  category: 'Sci-Fi',
}];

const booksReducer = (state = defaultState, action) => {
  const { type, payload: book } = action;
  const newBooks = [...state];
  switch (type) {
    case 'CREATE_BOOK':
      return newBooks.concat(book);
    case 'REMOVE_BOOK':
      const { id } = book;
      const index = newBooks.findIndex(book => book.id === id);
      newBooks.splice(index, 1);
      const newstate = [...newBooks];
      return newstate;
    default:
      return state;
  }
};

export default booksReducer;
