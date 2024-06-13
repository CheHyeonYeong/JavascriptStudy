import React, { useEffect } from "react";

function HookEffect() {
    useEffect(() => {
        console.log('렌더링 완료');
    });

    useEffect(() => {
        console.log('처음만 실행하는 경우입니다.');
    },[]);

    // useState
    const [name, setName] = React.useState('test');
    const handleName = (e) => {
        setName(e.target.value);
    };

    useEffect(() => {
        console.log("name 없데이트 시 실행됩니다");
    },[name]);

    return (
        <div>
            이름 : <input type="text" name = "name" value={name} onChange={handleName}/>
            <h3>리액트 이벤트 핸들링 결과: {name}</h3>
        </div>
    );

}

export default HookEffect;