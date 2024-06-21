//Count component 를 reducer로 만들어보자
import React from "react";

// type 지정 : Action
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

// reducer 함수 구현...
function reducer(state: number, action: Action):number {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            throw new Error('Unhandled action type');
    }
}


function CounterReducer() {
    const [count, setCount] = React.useReducer(reducer, 0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount({ type: "INCREMENT" })}>+</button>
            <button onClick={() => setCount({ type: "DECREMENT" })}>-</button>
        </div>
    );
}

export default CounterReducer