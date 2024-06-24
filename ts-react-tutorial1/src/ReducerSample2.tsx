import React from "react";
import { useSampleDispatch, useSampleState } from "./SampleContext";
import { Color } from "./SampleContext";

function ReducerSample2() {

    // context에 지정된 값을 호출... 커스텀 훅 사용
    const state = useSampleState();
    const dispatch = useSampleDispatch();
    const { count, text, color, isGood } = state;

    const setCount = (count: number) => dispatch({ type: "SET_COUNT", count });
    const setText = (text: string) => dispatch({ type: "SET_TEXT", text });
    const setColor = (color: Color) => dispatch({ type: "SET_COLOR", color });
    const toggleGood = () => dispatch({ type: "TOGGLE_GOOD" });

    return (
        <div>
            <p>
                <code>count : </code>{count}
            </p>
            <h1>
                <b>text : </b>
                {text}  
            </h1>       
            <h1 style={{ color }}>
                <b>color : </b>
                {color}
            </h1>
            <h1>
                <b>isGood : </b>
                {isGood ? "true" : "false"}
            </h1>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    count + 1
                </button>
                <button onClick={() => setCount(count - 1)}>
                    count - 1
                </button>
                <button onClick={() => setCount(5)}>
                    count 5
                </button>
            </div>
            <div>
                <input
                    value={text}    
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={() => setText("")}>
                    clear    
                </button>
            </div>
            <div>
                <button onClick={() => setColor('red')}>
                    red
                </button>
                <button onClick={() => setColor('orange')}>
                    orange
                </button>
                <button onClick={() => setColor('yellow')}>
                    yellow
                </button>
            </div>
            <div>
                <button onClick={toggleGood}>
                    toggleGood
                </button>
            </div>
        </div>
    );  
}

export default ReducerSample2;