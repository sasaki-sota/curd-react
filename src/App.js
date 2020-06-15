import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          これでニキビのアプリを作ります。<br/>
          妥協せずちゃんと作ります。<br/>
          末長く見守ってやってください<br/>
          大変恐縮ですが何卒よろしくお願いします <br/>

          <br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          作成者　佐々木颯汰
        </a>
      </header>
    </div>
  );
}

export default App;
