import Title from './components/views/title';
import Filters from './components/views/nav/Filters';
import Reviews from './components/views/section/Reviews';
import Pagination from './components/views/footer/Pagination';

function App() {
  return (
    <div className="App">
      <Title />
      <Filters />
      <section className='reviews container'>
        <Reviews />
      </section>
      <footer className='pagination container'>
        <Pagination />
      </footer>
    </div>
  );
}

export default App;
