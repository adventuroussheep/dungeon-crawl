import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

import APICall from "./Components/API";
import HomePage from "./Components/Homepage/Home";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <APICall/> */}
      </header>
        <HomePage/>
    </div>
  );
}

export default App;
