import logo from './logo.svg';
import './App.css';
import Count from './Hook/Count';
import UserList from './Hook/userList';
import { useCallback, useReducer, useRef, useState, useEffect } from 'react';
import CreateUser from './Hook/CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중....');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs :{
    username: '',
    email: '',
  },
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
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      }

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
  const {username, email} = state.inputs;
  const nextId = useRef(4);

  const onChange = useCallback ((e) => {
    const {name, value} = e.target;
    dispatch({type: 'CHANGE_INPUT', name, value});
    
  }, []);

  const onCreate = useCallback (() => {
    dispatch(
      {type: 'CREATE_USER',
      user : {
      id : nextId.current,
      username,
      email
    }
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback ((id) => {
    dispatch({type: 'TOGGLE_USER', id});
  }, []);

  const onDelete = useCallback ((id) => {
    dispatch({type: 'REMOVE_USER', id});
  }, []);

  return (
    <div className="App">
      <Count />
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}  />
      <UserList users={users} 
      onToggle={onToggle} onRemove={onDelete} />

      <div> 활성 사용자수 : 0</div>
    </div>
  );
}

export default App;
