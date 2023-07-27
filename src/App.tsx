import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Carga Dinners
        </p>
          <Hello/>
      </>
    </div>
  );
}

export default App;
