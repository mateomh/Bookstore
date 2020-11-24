import BookList from './bookList';
import BookForm from './bookform';
import NavBar from './navbar';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const App = () => (
  <>
    <NavBar />
    <BookList categories={categories} />
    <BookForm categories={categories} />
  </>
);

export default App;
