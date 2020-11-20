/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => (
  <div className="inputContainer">
    <form action="">
      <label htmlFor="title">book title</label>
      <input name="title" id="title" type="text" />
      <label htmlFor="category">Category</label>
      <select id="category">
        {category.map(x => <option key={x}>{x}</option>)}
      </select>
    </form>
  </div>
);

export default BookForm;
