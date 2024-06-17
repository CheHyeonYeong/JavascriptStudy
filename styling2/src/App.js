import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Circle from './styled-components/sample';
import Button from './styled-components/Button';
import styled, { ThemeProvider } from 'styled-components';
import Dialog from './styled-components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };

  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };

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
      <Dialog        
          title="정말로 삭제하겠습니까?"
          confirmText='삭제'
          cancelText='취소'
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        />
      {/* <Circle />
      <Circle color='pink'/>
      <Circle color='aqua'/> */}
      <AppBlock>  {/* 자식 컴포넌트를 둘러싸고 있는 div 컴포넌트 */}
        <ButtonGroup>
          <Button color ='pink' size='large'>Button</Button>
          <Button color ='gray' size='medium'>Button</Button>
          <Button color ='blue' size='small'>Button</Button>  
        </ButtonGroup>
        <ButtonGroup>
          <Button color ='pink' size='large'>Button</Button>
          <Button color ='gray' size='medium'>Button</Button>
          <Button color ='blue' size='small'>Button</Button>  
        </ButtonGroup>
        <ButtonGroup>
          <Button outline color ='pink' size='large'>Button</Button>
          <Button color ='gray' size='medium'>Button</Button>
          <Button color ='blue' size='small'>Button</Button>        
        </ButtonGroup>
        <ButtonGroup>
          <Button color='pink' fullWidth onClick={onClick}>삭제</Button>
          <Button fullWidth color ='gray' size='medium'>Button</Button>
          <Button fullWidth color ='blue' size='small'>Button</Button>  
        </ButtonGroup>
        <ButtonGroup>
          <Button>Button</Button>
        </ButtonGroup>
        
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;

