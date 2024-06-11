import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const name = 'react';

  // style 지정
  const style = {  // 객체로 만들어서 선언하는 방법
    backgroundColor: 'black',  // 카멜 표기법...
    color: 'aqua',
    fontSize: 30,
    padding: 15
  };
  

  return (
    <> {/* 이것은 fragment이다. */}
    <div style={style}>
      <WelcomeFunction name="Sara"/>
      <WelcomeClass name="Cahal"/>
      <WelcomeFunction name="Edite"/>

      <WelcomeFunction name={name}/> {/* js 코드를 표현 */}
    </div>

    <div className='test-box'>Hello World!!</div> {/* 하나의 태그로 묶여야 한다 */}
    </>
  );
}

// 함수형 컴포넌트
function WelcomeFunction(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 클래스형 컴포넌트
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default App;
