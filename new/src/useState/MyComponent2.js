// class 컴포넌트를 이용한 State 사용
import React  from "react";

class MyComponent2 extends React.Component{

    // 생성자에서 props 받기
    constructor(props){
        super(props);
        this.state = {
            a : 1,
            b : props.age
        }
    }

    render() {
        // props 받기
        let myName = 'lee sunsin';
        let {name, age} = this.props;

        return(
            <div>                
                {myName}의 클래스형 컴포넌트<br/>
                프로퍼티1: {name} <br/>
                프로퍼티2: {age} <br/> 
                state 사용1: {this.state.a} <br/>
                state 사용2: {this.state.b} <br/>
            </div>
        )
    }
}

export default MyComponent2;