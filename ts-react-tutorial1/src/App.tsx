import React from 'react';
import './App.css';
import Greetings from './component/Greetings';
import Counter from './component/Counter';
import MyForm from './component/MyForm';
import CounterReducer from './component/Counterreducer';
import ReducerSample from './component/ReducerSample';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello!`);
  }


  return (
    <div className="App">
      <ReducerSample />
      <hr />
      <Greetings name='Hyeon' mark='!' optional='hello' onClick={onClick}/>
      <hr />
      <MyForm onSubmit={(form) => console.log(form)}/>
      <hr />
      <Counter />
      <hr />
      <CounterReducer />
    </div>
  );
}

export default App;
