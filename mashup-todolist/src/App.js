import logo from './logo.svg';
import {createGlobalStyle} from 'styled-components';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

// 글로벌 스타일을 추가하고 싶을 때 사용하는 createGlobalStyle
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    /* background: black; */
  }
`;

function App() {
  return (
    <>    
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
