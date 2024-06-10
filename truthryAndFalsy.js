// 자스 문법이 아니지만 알아야 할 개념
function print(person){
    console.log(person === undefined || person === null ?  'no name' : person.name);
}

const person = {
    name: '홍길동'
};

print(person);
print(); // type Error가 뜬다! -> undefined로 뜬다

const person2 = null;
print(person2);