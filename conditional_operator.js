//삼항 연산자 연습

const array = [];  // 상수, 변경되지 않음
// let text = "";  // 재선언이 안됨

// if(array.length === 0) {
//     text = "empty";
// } else {
//     text = "not empty";
//}

let text = array.length === 0 ? "empty" : "not empty";

console.log(text);

// 삼항 연산자 중첩 사용 예시

const condition1 = false;
const condition2 = false;

const value = condition1 ? '와우!!!' : condition2 ? '안녕!!!' : '초';
console.log(value);