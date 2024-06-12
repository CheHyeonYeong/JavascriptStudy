import React, { useState } from "react";

function EventComponent () {
    const [name, setName ] = useState('');

    let handleName = (e) => {
        /* 2. 이벤트 객체 활용 */
        console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div>
            <h3>리액트 이벤트 핸들링</h3>
            {/* 1. 이벤트 연결 */}
            <input type="text" name = "name" value={name} onChange={handleName}/>  

            <h3>리액트 이벤트 핸들링 결과: {name}</h3>
        </div>
    );
}
export default EventComponent;