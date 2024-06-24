import React from "react";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

type TodoState = Todo[];

type TodoAction =
  | { type: 'CREATE'; todo: Todo }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

type TodoDispatch = React.Dispatch<TodoAction>;

const TodoStateContext = React.createContext<TodoState | null>(null);
const TodoDispatchContext = React.createContext<TodoDispatch | null>(null);
const TodoNextIdContext = React.createContext<React.MutableRefObject<number> | null>(null);


function todoReducer(state: TodoState, action: TodoAction):TodoState{
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => 
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type `);
    }
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer(todoReducer, [
        { id: 1, text: '할일1', done: false },
        { id: 2, text: '할일2', done: true },
        { id: 3, text: '할일3', done: false },
    ]);
    const nextId = React.useRef(4);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}  
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// 커스텀 hooks
export function useTodoState() {
    const state = React.useContext(TodoStateContext);
    if (!state) throw new Error('Cannot find TodoProvider');
    return state;
  }
  
  export function useTodoDispatch() {
    const dispatch = React.useContext(TodoDispatchContext);
    if (!dispatch) throw new Error('Cannot find TodoProvider');
    return dispatch;
  }
  
  export function useTodoNextId() {
    const nextId = React.useContext(TodoNextIdContext);
    if (!nextId) throw new Error('Cannot find TodoProvider');
    return nextId;
  }