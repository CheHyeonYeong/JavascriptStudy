// 자스 문법이 아니지만 알아야 할 개념
function print(person){
    console.log(person === undefined || person === null ?  'no name' : person.name);

    // 위 문법과 같다!
    if(!person){  // 거짓인 것처럼 반환, undefined 또는 null인경우 falsy
        console.log('no name');
    }
}

const person = {
    name: '홍길동'
};

print(person);
print(); // type Error가 뜬다! -> undefined로 뜬다

const person2 = null;
print(person2);

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!''); // empty 값
console.log(!NaN); // NaN -> Not a Number, 문자열을 숫자로 변환 할 때 parseInt()

// truthy 값
console.log(!3); 
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{value :1});

//truthy 값
// 1, ' ', [], {}
console.log(!!1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!{value:1});

console.log('------------------');
const value = { a:1 };
const truthy = value ? true : false;
console.log('truthy? ' + truthy);
console.log('!truthy? ' + !truthy);