import Title from './components/views/title';
import Filters from './components/views/nav/Filters';
import Reviews from './components/views/section/Reviews';

function App() {
  return (
    <div className="App">
      <Title />
      <Filters />
      <section className='reviews container'>
        <Reviews />
      </section>
      <footer className='pagination container'>
        <div className='page arrow left two'>
        </div><div className='page arrow left'>
        </div>
        <div className='page active'>
          1
        </div>
        <div className='page'>
          2
        </div>
        <div className='page'>
          3
        </div>
        <div className='page arrow right'>
        </div><div className='page arrow right two'>
        </div>
      </footer>
    </div>
  );
}

export default App;
