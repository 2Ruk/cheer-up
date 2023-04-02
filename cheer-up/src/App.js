// App.js
import React from 'react';
import './App.css';
import Recommendations from './components/recommendations';

const Header = () => {
  return (
    <header>
      <h2>오늘도 열심히 살았습니다</h2>
    </header>
  )
}
const Main = () => {
  return (
    <main>
      <Recommendations />
    </main>
  )
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
