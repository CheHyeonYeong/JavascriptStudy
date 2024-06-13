import logo from './logo.svg';
import './App.css';
import React, { Fragment, useRef, useState } from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';   // props 타입 검증을 위한 모듈,....
import StateComponent from './useState/stateTest';
import MyComponent2 from './useState/MyComponent2';
import EventComponent from './event/EventComponent';
import EventComponent2 from './event/EventComponent2';
import InputSample from './event/InputSample';
import UserList from './array/userList';
import InputSample2 from './array/InputSample2';
import CreateUser from './array/CreateUser';
import ArrayKey from './array/ArrayKey';

function App() {

  const name = 'react';

  // style 지정
  const style = {  // 객체로 만들어서 선언하는 방법
    backgroundColor: 'black',  // 카멜 표기법...
    color: 'aqua',
    fontSize: 30,
    padding: 15
  };
  
    // users 배열객체를 useState로 변경... 
    const [users, setUsers] = useState([
      {
        id: 1,
        username: '홍길동',
        email: 'hong@naver.com',
        active: true
      },
      {
        id: 2,
        username: '이순신',
        email: 'leeSS@naver.com',
        active: false
      },
      {
        id: 3,
        username: '유관순',
        email: 'Youks@naver.com',
        active: false
      }
    ]);

      // useState 입력값 처리를 위해서... 
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  // useRef를 이용한 컴포넌트에서 사용할 변수 지정
  // - useRef로 관리하는 변수는 값이 바뀐다고해서 컴포넌트가 리렌더링되지 않음
  // - 때문에 useRef로 관리하고 있는 변수는 설정 후 바로 조회 가능함. 
  // - setTimeout, setInterval 을 통해서 만들어진 id
  // - 외부 라이브러리를 사용하여 생성된 인스턴스
  // - scroll 위치
  const nextId = useRef(4);  
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가 로직... 
    const user = {
      id: nextId.current,  //현재 useRef로 설정된 값을 호출
      username,
      email
    };
    // 추가
    setUsers([...users,user]);

    // 입력값 정리
    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;   // onCreate가 동작하면, useRef에 현재값에 +1 처리
  }

  // 사용자 삭제
  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열 만듦
    // user.id가 파라미터로 전달된 id인 것만 제거한 새로운 배열 생성
    // filter를 사용하여 구현 -> true인 애들만 제거한다.
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, active: !user.active } : user
    ));
  }

  return (
    <> {/* 이것은 fragment이다. */}
    {/* <EventComponent />
    <MyComponent2  name = {'홍길동'} age = {20} /> 
    <StateComponent/> */}
    <hr />
    {/* 2nd Day : event */}
    {/* <EventComponent />
    <EventComponent2 />
    <InputSample /> */}
    <hr />
    
    {/* 2nd Day : 컴포넌트 배열 */}
    {/* <ArrayKey /> */}
    {/* <InputSample2 /> */}

    <hr/>

    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate} />
    <hr />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} /> {/* 등록사용자 출력 */}

    {/* <Wrapper> */}
    {/* <MyComponent name={name} age={10} addr="Seoul" email="test@naver" isSpecial/> */}
    {/* <div style={style}> */}
      {/* <WelcomeFunction name="Sara"/> */}
      {/* <WelcomeFunction name={name}/>  */} {/* jsx 코드를 표현 => js 코드가 아니다! */}
    {/* </div>++++ */}

    {/* <div className='test-box'>Hello World!!</div>  */} {/* 하나의 태그로 묶여야 한다 */}
    {/* </Wrapper> */}
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
