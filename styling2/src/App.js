import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Circle from './styled-components/sample';
import styled from 'styled-components';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;
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
