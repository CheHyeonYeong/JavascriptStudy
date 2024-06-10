// spread와 rest
// ES6에서 도입된 문법
// 1. spread
// 객체 혹은 배열을 펼칠 수 있는 문법
// const slime = {
//     name: 'slime'
// };
// const cuteSlime = {
//     name : "슬라임",
//     attribute : "cute"
// };
// const purpleCuteSlime = {
//     name : "슬라임",
//     attribute : "cute",
//     color : "purple"
// };


// spread 문법 사용
const slime = {
    name : 'slime'
};
const cuteSlime = {
    ...slime,
    attribute : 'cute'
};
const purpleCuteSlime = {
    ...cuteSlime,
    color : 'purple'
};

console.log(slime);
console.log(cuteSlime); // attribute: cute
console.log(purpleCuteSlime);

// 배열에서 spread
const animals = ['dog', 'cat', 'lion'];
const animals2 = [...animals, 'tiger'];
console.log(animals2);

// 2. rest
// 사용 방식은 비슷해 보이지만, 역할이 매우 다르낟.
// 객체 배열 그리고 함수의 파라미터에서 사용이 가능
const {color, ...rest } = purpleCuteSlime;
console.log(color, rest);

// 배열의 rest
const number2 = [1, 2, 3, 4, 5];
const [first, ...rest2] = number2;  // rest는 최선단에 살 수 없다.
console.log(first, rest2);