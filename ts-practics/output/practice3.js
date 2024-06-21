"use strict";
// Generics
// 타입 스크립트에서 함수, 클래스, interface, type alias를 사용할 때
// 여러 종류의 타입에 대해서 호환을 맞춰야 하는 상황에서 사용하는 문법
// 함수에서 Generics 사용하기
// 객체와 객체를 합쳐주는 함수
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
// 이런 경우 Generics 사용하기
function merge2(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged2 = merge2({ foo: 1 }, { bar: 1 });
console.log(merged2);
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
console.log(wrapped);
const wrapped2 = wrap('hello');
console.log(wrapped2);
const typeItems = {
    list2: [1, 2, 3]
};
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.length);
queue.dequeue();
console.log(queue.length);
queue.dequeue();
console.log(queue.length);
console.log(queue.dequeue());
