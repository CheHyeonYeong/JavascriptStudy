import logo from './logo.svg';
import './App.css';
import Count from './Hook/Count';
import UserList from './Hook/userList';
import React, { useCallback, useReducer, useRef, useMemo, useState, useEffect } from 'react';
import CreateUser from './Hook/CreateUser';
import useInputs from './Hook/useImputs';
import styled from './css/App.module.css';

function countActiveUsers(users) {``
  console.log('활성 사용자 수를 세는 중....');
  return users.filter(user => user.active).length;
}

const initialState = {
  // custom hook 작업을 제외 하여 inputs를 삭제한다.
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'XUdXm@example.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'XUdXm@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'XUdXm@example.com',
      active: false
    }
  ]
};


function reducer(state , action) {
  switch(action.type) {
    // custom hook 작업을 제외 -> change input은 useInputs에 구현되어 있기 때문이다.
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? { ...user, active: !user.active } : user )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        // 전달된 값의 id와 같지 않다면 배열에 넣겠다.
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      return state;
  }
  
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;  // 비구조화 할당
  // custom hooks 구현으로 다음을 바꿔서 사용
  // const {username, email} = state.inputs;
  const [{username, email}, onChange, reset] = useInputs({
    username: '',
    email: ''
  });
  const nextId = useRef(4);

  const count = useMemo(() => countActiveUsers(users), [users]);

  const onCreate = useCallback (() => {
    dispatch(
      {type: 'CREATE_USER',
      user : { 
      id : nextId.current,
      username,
      email
    }
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  const onToggle = useCallback ((id) => {
    dispatch({type: 'TOGGLE_USER', id});
  }, []);

  const onDelete = useCallback ((id) => {
    dispatch({type: 'REMOVE_USER', id});
  }, []);

  return (
    <div className="App">

      <br />
      <hr />
      <Count />
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}  />
      <UserList users={users} 
      onToggle={onToggle} onRemove={onDelete} />

      <div> 활성 사용자수 : {count}</div>
      <div> 활성 사용자수 : {count}</div>
    </div>
  );
}

// 24.06.17 
// 1. UserDispatch 라는 이름으로 Context를 내보내기
export const UserDispatch = React.createContext(null);
// 내보낸 것을 사용하고 싶은 경우... import { UserDispatch } from './App';
export default App;
