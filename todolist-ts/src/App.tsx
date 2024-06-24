import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './components/TodoContext';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = styled.div`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <GlobalStyle>
      <TodoProvider>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </GlobalStyle>
  );
}

export default App;
