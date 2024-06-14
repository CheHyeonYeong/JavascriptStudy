import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Box from './cssmodule/Box';
import Checkbox from './cssmodule/component/Checkbox';
import { useState } from 'react';

function App() {
  const [check, setCheck] = useState(false);
      
  const onChange = e => {
    setCheck(e.target.checked);
  }

  return (
    <div className="App">


      {/* <div className='button'>
        <Button size='large' onClick={() => alert('hello')}>hello</Button>
        <Button size='medium' color='gray'>hello</Button>
        <Button size='small' color='pink' fullWidth>hello</Button>
      </div>
      <div className='button'>
        <Button size='large'>hello</Button>
        <Button size='medium' color='gray' outline>hello</Button>
        <Button size='small' color='pink' outline={true}>hello</Button>
      </div> */}

      {/* CSS module test */}
      <Checkbox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </Checkbox>
      <p>
        <b>check: </b>
        {check? 'true' : 'false'}
      </p>
      <Box />
    </div>
  );
}

export default App;
