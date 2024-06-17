import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Circle from './styled-components/sample';
import Button from './styled-components/Button';
import styled, { ThemeProvider } from 'styled-components';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {

  return (
    <ThemeProvider // 웹 사이트 디자인 시에 메인 색상을 지정
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#496057',
          pink: '#f06595',
        }
      }}
    >
      {/* <Circle />
      <Circle color='pink'/>
      <Circle color='aqua'/> */}
      <AppBlock>  {/* 자식 컴포넌트를 둘러싸고 있는 div 컴포넌트 */}
        <Button color ='pink'>Button</Button>
        <Button color ='gray'>Button</Button>
        <Button color ='blue'>Button</Button>
        <Button>Button</Button>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
