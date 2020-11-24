/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/label-has-associated-control */

import PropTypes, { string } from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/index';
import BookFormStyles from './styles/bookform.module.css';

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
    <div className={BookFormStyles.InputContainer}>
      <h2 className={BookFormStyles.FormTitle}>ADD NEW BOOK</h2>
      <form action="" className={BookFormStyles.Form}>
        <input onChange={handleChange} className={BookFormStyles.FormInput} name="title" id="title" type="text" value={title} placeholder="Book Title" />
        <select id="category" className={BookFormStyles.FormDropdown} onChange={handleChange} value={category}>
          {categories.map(x => <option key={x}>{x}</option>)}
        </select>
        <button className={BookFormStyles.Button} onClick={handleSubmit} type="button">Add Book</button>
      </form>
    </div>
  );
};

BookForm.propTypes = { categories: PropTypes.arrayOf(string) };

BookForm.defaultProps = {
  categories: [],
};

export default BookForm;
