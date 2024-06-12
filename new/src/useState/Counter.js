import {useState} from 'react';

function Counter(){

    const [i, setData] = useState(0);
    const plus = () => {

        setData(i+1);

    }
    const minus = () => {
        setData(i-1);
    }
    
    return (
        <div>
            <h1>{i}</h1>
            <button onClick={plus}> +1 </button>
            <button onClick={minus}> -1 </button>
        </div>
    )
}

export default Counter;