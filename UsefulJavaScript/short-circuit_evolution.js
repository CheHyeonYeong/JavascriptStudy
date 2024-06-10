// 단축 평가 논리 계산법
true && true; // true
true && false; // false
true || false; // true
false || true; // true
!true; // false
!false; // true

const dog = {
    name : '멈ㅁ뭄미'
};
console.log('------------------');

function getName(animal) {
    // if(animal){
    // return animal.name;
    // }
    // return undefined;
    return animal && animal.name;
}

const name = getName(dog);
console.log(name);

console.log('------------------');
console.log(true && 'Hello');        // Hello
console.log(false && 'Hello');       // false
console.log('Hello' && 'Bye');       // bye
console.log(null && 'Hello');        // null
console.log(undefined && 'Hello');   // undefined
console.log('' && 'Hello');          //
console.log(0 && 'Hello');           // 0
console.log(1 && 'Hello');           // Hello
console.log(1 && 1);                // 1

console.log('------------------');
// || 연산자로 코드 단축하기
const namelessDog = {
    name : ''
};

function getName2(animal) {
    constname = animal && animal.name;
    if(!name) {
        return '무명입니다';
    }
    return name || '이름없는 동물';
}

const name2 = getName2(dog);
console.log(name2);