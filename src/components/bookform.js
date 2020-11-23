/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();

  const handleChange = () => {
    
  };
  return (
    <div className="inputContainer">
      <form action="">
        <label htmlFor="title">book title</label>
        <input name="title" id="title" type="text" />
        <label htmlFor="category">Category</label>
        <select id="category">
          {category.map(x => <option key={x}>{x}</option>)}
        </select>
        <button type="button">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
