import React, { useState } from "react";

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state;
    }
}

function Count() {
    // const [number, setNumber] = useState(0);
    // reducer 적용
    const [number, dispatch] = React.useReducer(reducer, 0);
    const onIncrement = () => {
        // setNumber(number + 1);
        dispatch({type: 'INCREMENT'});
    };
    const onDecrement = () => {
        // setNumber(number - 1);
        dispatch({type: 'DECREMENT'});
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
}

export default Count;
