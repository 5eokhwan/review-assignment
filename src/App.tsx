import Title from './components/views/title';
import Filter from './components/views/nav/Filters';

function App() {
  return (
    <div className="App">
      <Title />
      <Filter />
      <section className='reviews container'>
        <article>
          <h1>김O택 | 고2, 수학</h1>
          <p className='date'>2020.03.01</p>
          <p className='content'>먼저 저는 미술 전공을 하는 학생입니다. 
            3학년이 되면 거의 하루도 빠짐없이 학원에 가야합니다 
            그렇기 때문에 대부분의 시간을 입시학원에서 보내게 됩니다. 
            실기 학원 또한 타지역에 있어서 시내버스를 타고 환승을</p>
        </article>
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
