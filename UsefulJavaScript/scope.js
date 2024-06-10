// javascript scope
// 1. Global(전역) scope: 코드의 모든 범위에서 사용가능
// 2. Function(함수) scope: 함수의 안에서만 사용가능
// 3. Block(블록) scope: if, loop, switch, 등 특정 블록 내에서만 사용가능
const value = 'Hello';

function myFunction() {
    console.log('myFunction');
    console.log(value);  // Global scope 값
}
function otherFunction() {
    console.log('otherFunction');
    const value = 'Bye';  // Function scope 값
    console.log(value);
}
function myFunction2() {
    const value = 'bye';
    const anotherValue = 'world';
    function functionInsideFunction() {
        console.log('functionInsideFunction');
        console.log(value);
        console.log(anotherValue);
    }
    functionInsideFunction();
}
function myFunction3() {
    const value = 'bye';
    if(true) {
        const value = 'world';
        console.log('block scope: ' + value);
    }
    console.log('function scope: ' + value);
}



myFunction();
otherFunction();


console.log('--------2---------');
myFunction2();

console.log('--------3---------');
myFunction3();

console.log('global scope: ' + value);
// console.log(anotherValue); function scope 값