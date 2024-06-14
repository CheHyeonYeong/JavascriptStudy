import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Circle from './styled-components/sample';

function App() {

  return (
    <div className="App">
      <Circle />
      <Circle color='pink'/>
      <Circle color='aqua'/>

    </div>
  );
}

export default App;
