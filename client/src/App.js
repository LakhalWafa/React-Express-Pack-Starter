import React from 'react';
import logo from './logo.svg';
import Custumers from './components/custumers/custumers';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Custumers />
    </div>
  );
}

export default App;
