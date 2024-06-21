import React from "react";

type GreetingsProps = {         // Greetings에 대한 타입을 미리 지정한다.
    name: string;
};

// const Greetings: React.FC<GreetingsProps> = ({ name }) => (<div>Hello, {name}</div>);
  
function Greetings({ name }: GreetingsProps) {
    return <div>Hello, {name}</div>;
}
export default Greetings;