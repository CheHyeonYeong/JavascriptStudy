import React from "react";

// 필요한 타입들 선언
export type Color = "red" | "orange" | "yellow";

// 상태를 위한 타입
type state = {  // state
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

// 액션 타입
type Action = {  // action
    type: "SET_COUNT";
    count: number;
} | {  // action
    type: "SET_TEXT";
    text: string;
} | {  // action
    type: "SET_COLOR";
    color: Color;
} | {  // action
    type: "TOGGLE_GOOD";
};

type SampleDispatch = React.Dispatch<Action>;

// Context
const SampleStateContext = React.createContext<state | null>(null);
const SampleDispatchContext = React.createContext<SampleDispatch | null>(null);

// Reducer
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

// SampleProvider에서 useReducer를 사용하고, 
// SampleStateContext.Provider와 SampleDispatchContext.Provider로 childeren을 감싸서 반환
export function SampleProvider({ children }: { children: any }) {
    const [state, dispatch] = React.useReducer(reducer, {
        count: 0,
        text: "hello",
        color: "red",
        isGood: true
    });

    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>   
        </SampleStateContext.Provider>
    );
}

// state와 dispatch를 쉽게 사용하기 위한 커스텀 hooks
export function useSampleState() {
    const state = React.useContext(SampleStateContext);
    if (!state) {
        throw new Error("Cannot find SampleProvider");
    }
    return state;
}

export function useSampleDispatch() {
    const dispatch = React.useContext(SampleDispatchContext);
    if (!dispatch) {
        throw new Error("Cannot find SampleProvider");
    }
    return dispatch;
}


