/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/label-has-associated-control */

import PropTypes, { string } from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/index';

const BookForm = props => {
  const { categories } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState(categories[0]);

  const handleChange = e => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = () => {
    const bookObject = {
      id: Math.random(),
      title,
      category,
    };
    dispatch(actions.createBook(bookObject));
    setTitle('');
    setCategory(categories[0]);
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
        <button onClick={handleSubmit} type="button">Add Book</button>
      </form>
    </div>
  );
};

BookForm.propTypes = { categories: PropTypes.arrayOf(string) };

BookForm.defaultProps = {
  categories: [],
};

export default BookForm;
