import React from 'react';
import './App.css';
import Greetings from './component/Greetings';
import Counter from './component/Counter';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello!`);
  }
  return (
    <div className="App">

      <Greetings name='Hyeon' mark='!' optional='hello' onClick={onClick}/>
      <hr />
      <Counter />
    </div>
  );
}

export default App;
