import React, { useState } from "react";

function LoopEffect() {
    const [name, setName] = useState({name:"홍길동"});

    // 이하 무한 루프 발생
    React.useEffect(() => {
        console.log(name);
        const copy = {...name};  // 객체 전개문 (spread)
        setName(copy);
    },[]);
    return (
        <div>
            <h1>Loop Effect</h1>
        </div>
    );
}

export default LoopEffect;