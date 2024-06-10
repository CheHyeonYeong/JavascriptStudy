// 조건문을 스마트하게..

// 1. 특정 값이 여러 값 중 하나인지 확인해야 할 때..
// function isAnimal(value) {
    // return (
    //     value === 'dog' ||
    //     value === 'cat' ||
    //     value === 'lion'
    // );

    // 2. includes() 함수를 사용해야 합니다
    // const animals = ['dog', 'cat', 'lion'];
    // return animals.includes(value);
// }

// 3. 
const isAnimal = value => ['dog', 'cat', 'lion'].includes(value);

console.log(isAnimal('dog'));
console.log(isAnimal('cat'));
console.log(isAnimal('lion'));
console.log(isAnimal('tiger'));