import React from "react";

type GreetingsProps = {         // Greetings에 대한 타입을 미리 지정한다.
    name: string;
    mark?: string;
    optional?: string;
    onClick: (name: string) => void;
};

// const Greetings: React.FC<GreetingsProps> = ({ name }) => (<div>Hello, {name}</div>);
  /* React.FC 사용시 특징
  1. children 값이 props에 기본적으로 들어가 있음. 
  2. defaultProps, propTypes, contextTypes 등 설정시 자동완성 처리
  하지만, children이 옵션널로 들어가 있는 상황에서 props 타입이 명백하지 않음
  때문에 React.FC 사용시에 Props 타입 안에 children 설정해야 함. 
  그리고, defaultProps가 제대로 동작하지 않음. 
*/
const Greetings = ({name, mark, optional, onClick}:GreetingsProps) => {
    const handleClick = () => onClick(name);
    return(
        <div>Hello, {name}{mark}
            {optional && <p>{optional} </p>}
            <div>
                <button onClick={handleClick}>ClickMe!</button>
            </div>
        </div>
    );
}
Greetings.defaultProps = { name: 'Hyeon', mark: '!' };
export default Greetings;