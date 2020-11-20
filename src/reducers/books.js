const defaultState = {
  books: [{
    id: 1,
    title: 'Harry Potter',
    category: 'Fantasy',
  },
  {
    id: 2,
    title: 'Lord of the Rings',
    category: 'Fantasy',
  }],
};

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return null;
    case 'REMOVE_BOOK':
      return null;
    default:
      return state;
  }
};

export default booksReducer;
