import logo from './logo.svg';
import './App.css';
import React from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';   // props 타입 검증을 위한 모듈,....
import StateComponent from './stateTest';

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
    <StateComponent></StateComponent>
    <Wrapper>
    <MyComponent name={name} age={10} addr="Seoul" email="test@naver" isSpecial/>
    <div style={style}>
      <WelcomeFunction name="Sara"/>
      <WelcomeFunction name={name}/> {/* jsx 코드를 표현 => js 코드가 아니다! */}
    </div>

    <div className='test-box'>Hello World!!</div> {/* 하나의 태그로 묶여야 한다 */}
    </Wrapper>
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

// 화살표 함수를 이용한 컴포넌트
const MyComponent = ({name, age, addr, email, isSpecial}) => {

  return (
    <>
      { isSpecial && 
      <div>
        나의 첫 번째 MyComponent 입니다. <br />
        프로퍼티 1 : {name}<br />
        프로퍼티 2 : {age}<br />
        기본값 프로퍼티 3 : {addr}<br />
      </div>
      }
    </>
  );
}

// props 기본값 설정하기.. 중요 * 대소문자를 구분함
// 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설장하는 경우에 사용함.
// syntax : 컴포넌트.defaultProps = {};

MyComponent.defaultProps = {
  age: 10,
  addr: 'Seoul'
}

// props 타입 검증 주의사항 : 대소문자를 정확하게 구분함
// npm install prop-types
// 컴포넌트명.propsType = { };
// PropType이 기대하는 값을 가지는지 여부를 확인!
MyComponent.propsType = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string.isRequired    // 필수값
}


export default App;
