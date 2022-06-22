import Navbar from './components/Navbar'
import CardList from './components/CardList';
import Categories from './components/Categories';
import Sort from './components/Sort';

function App() {
  return (
    <div className="app__wrapper">
      <div className="App">
        <Navbar/>
        <div className='category-wrapper'>
          <Categories/>
          <Sort/>
        </div>
        <CardList/>
      </div>
    </div>
  );
}

export default App;
