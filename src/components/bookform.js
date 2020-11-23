/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();

  const handleChange = e => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  return (
    <div className="inputContainer">
      <form action="">
        <label htmlFor="title">book title</label>
        <input onChange={handleChange} name="title" id="title" type="text" value={title} />
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChange} value={category}>
          {categories.map(x => <option key={x}>{x}</option>)}
        </select>
        <button type="button">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
