/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import FilterStyles from './styles/categoryfilter.module.css';

const CategoryFilter = props => {
  const {
    categories,
    callback,
    value,
  } = props;
  return (
    <div className={FilterStyles.FilterContainer}>
      <label className={FilterStyles.FilterLabel} htmlFor="category">CATEGORIES FILTER: </label>
      <select className={FilterStyles.DropDown} id="category" onChange={callback} value={value}>
        <option selected>All</option>
        {categories.map(x => <option key={x}>{x}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  callback: PropTypes.func,
  value: PropTypes.string,
};

CategoryFilter.defaultProps = {
  categories: [],
  callback: null,
  value: 'All',
};

export default CategoryFilter;
