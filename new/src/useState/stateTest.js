import {useState} from 'react';

const StateComponent = () =>{
    const [msg, setData] = useState('first msg');
    const enter = () => {
        // msg = 'changed msg'; // 직접 설정 x
        setData('changed msg');

    }
    const exit = () => {
        setData('퇴장했습니다.');
    }

    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={enter}>click</button>
            <button onClick={exit}>퇴장</button>
        </div>
    )
}

export default StateComponent;