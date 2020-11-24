import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const {
    categories,
    callback,
    value,
  } = props;
  return (
    <select id="category" onChange={callback} value={value}>
      <option selected>All</option>
      {categories.map(x => <option key={x}>{x}</option>)}
    </select>
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
