const booksReducer = (state, action) => {
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
