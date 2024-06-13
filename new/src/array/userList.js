import React, { useEffect } from "react";

// User 컴포넌트
function User({user, onRemove, onToggle}) {
    useEffect(() => {
        console.log('컴포넌트가 마운트되었습니다.', user.id);
        return () => {
            console.log('컴포넌트가 화면에서 사라짐')
        };
    },[])

    return (
      <div>
          <b onClick={() => onToggle(user.id)}
          style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}}
          >{user.username}</b> <span>({user.email})</span>
          <button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
  }

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