import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className='subtitle'>
        꾸며지지 않은 리얼 후기가 궁금해?!
        </div>
        <div className='title'>
          똑같이 고민하고 미리 경험해본<br />
          <span className='purple'> 실제 수강생</span>의 후기로 확인하세요 !
        </div>
      </header>
      <nav className='filters container'>
        <div className='filter grade'>
          <span className='category'>학년</span>
          <span className='check-set'>
            <div>전체</div>
            <div>고3, N수생</div>
            <div>고2</div>
            <div>고1</div>
            <div>중3</div>
            <div>중2</div>
            <div>중1</div>
          </span>
        </div>
        <div className='filter subject'>
        <span className='category'>과목</span>
          <div className='check-set'>
            <div>전체</div>
            <div>수학</div>
            <div>영어</div>
            <div>국어</div>
            <div>과학</div>
            <div>사회</div>
            <div style={{visibility: "hidden"}}></div>
          </div>
        </div>
      </nav>
      <section className='reviews container'>
        <article>
          <h1>김O택 | 고2, 수학</h1>
          <p className='date'>2020.03.01</p>
          <p className='content'>먼저 저는 미술 전공을 하는 학생입니다. 
            3학년이 되면 거의 하루도 빠짐없이 학원에 가야합니다 
            그렇기 때문에 대부분의 시간을 입시학원에서 보내게 됩니다. 
            실기 학원 또한 타지역에 있어서 시내버스를 타고 환승을</p>
        </article>
        <article>
          <h1>김O택 | 고2, 수학</h1>
          <p className='date'>2020.03.01</p>
          <p className='content'>먼저 저는 미술 전공을 하는 학생입니다. 
            3학년이 되면 거의 하루도 빠짐없이 학원에 가야합니다 
            그렇기 때문에 대부분의 시간을 입시학원에서 보내게 됩니다. 
            실기 학원 또한 타지역에 있어서 시내버스를 타고 환승을</p>
        </article>
        <article>
          <h1>김O택 | 고2, 수학</h1>
          <p className='date'>2020.03.01</p>
          <p className='content'>먼저 저는 미술 전공을 하는 학생입니다. 
            3학년이 되면 거의 하루도 빠짐없이 학원에 가야합니다 
            그렇기 때문에 대부분의 시간을 입시학원에서 보내게 됩니다. 
            실기 학원 또한 타지역에 있어서 시내버스를 타고 환승을</p>
        </article>
        <article>
          <h1>김O택 | 고2, 수학</h1>
          <p className='date'>2020.03.01</p>
          <p className='content'>먼저 저는 미술 전공을 하는 학생입니다. 
            3학년이 되면 거의 하루도 빠짐없이 학원에 가야합니다 
            그렇기 때문에 대부분의 시간을 입시학원에서 보내게 됩니다. 
            실기 학원 또한 타지역에 있어서 시내버스를 타고 환승을</p>
        </article>
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
