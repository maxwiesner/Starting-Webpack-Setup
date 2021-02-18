import React from 'react';
import logo from './assets/logo.svg';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yo Yo Yo. Enjoy the new project, tiger.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code.
        </a>
      </header>
    </div>
  );
}

export default App;
