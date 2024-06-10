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