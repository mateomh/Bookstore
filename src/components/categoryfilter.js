import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const { categories } = props;
  return (
    <select id="category">
      <option selected>All</option>
      {categories.map(x => <option key={x}>{x}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = { categories: PropTypes.arrayOf(PropTypes.string) };

CategoryFilter.defaultProps = {
  categories: [],
};

export default CategoryFilter;
