import BookList from './bookList';
import BookForm from './bookform';
import CategoryFilter from './categoryfilter';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <>
    <CategoryFilter categories={categories} />
    <BookList />
    <BookForm categories={categories} />
  </>
);

export default App;
