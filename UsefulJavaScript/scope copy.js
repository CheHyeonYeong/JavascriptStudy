// var
var value = 'Hello';

function myFunction() {
    var value = 'Bye';
    if(true) {
        var value = 'world';
        console.log('block scope: ' + value);
    }
    console.log('function scope: ' + value);
}

myFunction();
console.log('global scope: ' + value)
console.log('-----------------')

// Hosting
// 이벤트 리스너의 함수를 호스트 객체에 바인딩 해줍니다
// 예시 코드

document.querySelector('button').addEventListener('click', buttonClicked);

function buttonClicked() {
    console.log('button clicked');
}   

