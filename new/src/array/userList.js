import React, { useEffect } from "react";

// User 컴포넌트

const User = React.memo(function User({user, onRemove, onToggle}) {

    /*
    mount 시에 하는 작업들
    1. props로 받은 값을 컴포넌트의 로컬 상태로 설정
    2. 외부 api 요청 (ract API 등등..)
    3. 라이브러리 사용 (D3, Video.js 등등...)
    4. setInterval을 통한 반복 작업 혹은 setTimeout을 통한 작업 예약

    unmount 시에 하는 작업들
    1. setTimeout, setInterval을 사용하여 등록한 작업들 clear 하기 (clearTimeout, clearInterval)
    2. 라이브러리 인스턴스 제거

    */
    // useEffect(() => {
    //     console.log('컴포넌트가 마운트되었습니다.', user.id);
    //     return () => {
    //         console.log('컴포넌트가 화면에서 사라짐')
    //     };
    // },[])

    // 의존성 배열에 특정 값 넣기 -> 컴포넌트가 처음 mount 될 때 호출, 지정한 값(의존성 값)이 바뀔 때 마다 호출
    // 의존성 배열에 특정 값이 있으면 언마운트 시에도 호출, 값이 바뀌기 직전에도 호출
    // useEffect(() => {
    //     console.log('user 값이 설정됨.');
    //     console.log(user);
    //     return () => {
    //         console.log('user가 바뀌기 전')
    //         console.log(user);
    //     };
    // },[user])
    // 만약에 useEffect() 안에서 사용하는 상태(state)나, props가 있다면 useEffect()의 deps(의존성 배열)에 넣는 것이 규칙
    // 의존성 배열에 넣지 않으면 useEffect에 등록된 함수가 실행될 때 최신 props 또는 상태를 가리키지 못하게 된다.
    // 의존성 배열을 생략하는 경우 리렌더링시 마다 호출이 된다.

    return (
      <div>
          <b onClick={() => onToggle(user.id)}
          style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}}
          >{user.username}</b> <span>({user.email})</span>
          <button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
  });

function UserList({users, onRemove, onToggle}) {
    return (        
        <div>
            {/* array.map() 함수를 이용한 컴포넌트 반복 */}
            { users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            )) }
        </div>

    )
}
export default UserList;