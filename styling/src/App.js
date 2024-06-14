import logo from './logo.svg';
import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <div className='button'>
        <Button size='large'>hello</Button>
        <Button size='medium' color='gray'>hello</Button>
        <Button size='small' color='pink'>hello</Button>
      </div>
      <div className='button'>
        <Button size='large'>hello</Button>
        <Button size='medium' color='gray' outline>hello</Button>
        <Button size='small' color='pink' outline={true}>hello</Button>
      </div>
      
    </div>
  );
}

export default App;
