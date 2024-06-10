// 함수의 기본 파라미터

function calculate(r) {
    const radius = r || 1;  // if(r === undefined) r = 1, ES5 이전..
    return Math.PI * r * r;
}

const area = calculate(5);  // 빈 값을 주면 숫자가 아니라서 nan이 뜬다.
console.log(area);


// ES6 이후에서 처리
function calculateCircleArea(r=1){
    return Math.PI * r * r;
}

const area2 = calculateCircleArea();
console.log(area2);