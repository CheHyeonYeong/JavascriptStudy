import React from "react";

// type setting
type Color = "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";

type state = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

// Action type setting
type Action =
    | { type: "SET_COUNT"; count: number }
    | { type: "SET_TEXT"; text: string }
    | { type: "SET_COLOR"; color: Color }
    | { type: "TOGGLE_GOOD" };      // boolean은 toggle이라고 한다. 

// reducer
function reducer(state: state, action: Action): state {
    switch (action.type) {
        case "SET_COUNT":
            return {
                ...state,
                count: action.count
            };
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            };
        case "SET_COLOR":
            return {
                ...state,
                color: action.color
            };
        case "TOGGLE_GOOD":
            return {
                ...state,
                isGood: !state.isGood
            };
        default:
            throw new Error("Unhandled action");
    }
}

function ReducerSample() {
    
    const [state, dispatch] = React.useReducer(reducer, {
        count: 5,
        text: "",
        color: "red",
        isGood: true
    });
    const setCount = (count: number) => dispatch({ type: "SET_COUNT", count });
    const setText = (text: string) => dispatch({ type: "SET_TEXT", text });
    const setColor = (color: Color) => dispatch({ type: "SET_COLOR", color });
    const toggleGood = () => dispatch({ type: "TOGGLE_GOOD" });
    return (
        <div>
            <p>
                <code>count : </code>{state.count}
            </p>
            <h1>
                <b>text : </b>
                {state.text}
            </h1>
            <h1 style={{ color: state.color }}>
                <b>color : </b>
                {state.color}
            </h1>
            <h1>
                <b>isGood : </b>
                {state.isGood ? "true" : "false"}
            </h1>
            <div>
                <button onClick={() => setCount(state.count + 1)}>+1</button>
                <button onClick={() => setCount(state.count - 1)}>-1</button>
            </div>
            <div>
                <input value={state.text} onChange={(e) => setText(e.target.value)} />
                <button onClick={() => setText("")}>clear</button>
            </div>
            <div>
                <select value={state.color} onChange={(e) => setColor(e.target.value as Color)}>
                    <option>red</option>
                    <option>orange</option>
                    <option>yellow</option>
                    <option>green</option>
                    <option>blue</option>
                    <option>indigo</option>
                    <option>violet</option>
                </select>
            </div>
            <div>
                <button onClick={toggleGood}>good</button>
            </div>
        </div>

    );
}

export default ReducerSample;