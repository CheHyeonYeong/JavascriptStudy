import React from 'react';
import './App.css';
import Greetings from './component/Greetings';
import Counter from './component/Counter';
import MyForm from './component/MyForm';
import CounterReducer from './component/Counterreducer';
import ReducerSample from './component/ReducerSample';
import { SampleProvider } from './SampleContext';
import ReducerSample2 from './ReducerSample2';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello!`);
  }


  return (
    <div className="App">
      {/* <ReducerSample />
      <hr />
      <Greetings name='Hyeon' mark='!' optional='hello' onClick={onClick}/>
      <hr />
      <MyForm onSubmit={(form) => console.log(form)}/>
      <hr />
      <Counter />
      <hr />
      <CounterReducer /> */}

      <SampleProvider>
        <ReducerSample2 />
      </SampleProvider>
    </div>
  );
}

export default App;
