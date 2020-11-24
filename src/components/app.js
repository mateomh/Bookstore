import BookList from './bookList';
import BookForm from './bookform';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <>
    <BookList categories={categories} />
    <BookForm categories={categories} />
  </>
);

export default App;
