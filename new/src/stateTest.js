import {useState} from 'react';

const StateComponent = () =>{
    const [msg, setData] = useState('first msg');
    const enter = () => {
        msg = 'changed msg';
    }

    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={enter}>click</button>
        </div>
    )
}

export default StateComponent;