// 비구조화 할당 문법 - 구조 분해
const object = {
    a:1, b:2
};
const {a,b} = object;
console.log(a, b);

function print({a, b}) {
    console.log(a, b);
}

print(object);