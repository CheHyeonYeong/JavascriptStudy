import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

function App() {
  // axios를 이용한 통신 테스트
  
  let [raw, setRaw] = useState();
  // const handleClick = () => {
  //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //   .then((res) => {
  //     console.log(res);
  //     setRaw(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  // 클릭시 비동기 통신 -> 버튼으로 작업함
  // const handleClick = () => {
  //   fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')  // 반환타입은 promise<>임. -> typescript임.
  //   .then((res) => res.json())    // promise는 성공 실패에 따라서 쓸 수 있다. (맞는지 몰겠음)
  //   .then((res) => {
  //     console.log(res);
  //     setRaw(res);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }

  // 2. useEffect 사용하는 방법
  // 화면 렌더링 완료시 데이터 처리를 위해서 사용
  // 이 때 비동기 작업을 컴포넌트에서 바로 쓰고 state를 변경하면 무한루프에 빠짐.
  // useEffect() 훅을 이용해서 첫 번째 렌더링 완료 시에만 데이터를 가져오게 처리
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')  
    .then((res) => res.json())   
    .then((res) => { // json 처리 이후의 데이터
      setRaw(res);
    }).catch((err) => {
      console.log(err);
    });
  })  

  // 3. async(비동기를 알림), await(순차적으로) 적용
  // async, await 규칙
  // 1. async 함수 안에 await 가 존재.
  // 2. function 앞에 async 키워드를 추가. 함수는 언제나 promise로 반환
  // 3. 리턴이 프로미스라면 await 적용하고 then을 없앨 수 있음

  const handleClick =async () => { // await : 싱글스레드 => 순서가 보장되지 않는다.
    // async => 순서가 보장된다

    let response = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')

    console.log(response.data);
    setRaw(response.data);
    console.log(1);
    console.log(2);

    let response2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log(response2.data);
    setRaw(response2.data);
    console.log(3);
    console.log(4);

    let response3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log(response3.data);
    setRaw(response3.data);
    console.log(5);
    console.log(6);
  }

  return (
    <div>
      <h3> 클릭시 fetch로 데이터 가져오기</h3>
      <button type='button' onClick={handleClick}>
        데이터 로드
      </button>
      {raw !== undefined?
        <div>
          {raw.userId}<br/>
          {raw.userPw}<br />
          {raw.userName}<br />
          </div>
          :undefined    }
    </div>
  );
}

export default App;
