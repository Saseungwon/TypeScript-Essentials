"use strict";
// optional property1 : 있어도 되고 없어도 되는 프로퍼티 사용할 때 '?'
function hello2(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
// '?' 사용으로 두 가지 다 실행 가능  
hello2({ name: 'John', age: 45 });
hello2({ name: 'Seungwon' });
function hello3(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
const p31 = {
    name: 'John',
    age: 32,
};
const p32 = {
    name: 'anna',
    sisters: ['Sung', 'chan']
};
const p33 = {
    name: 'Jane',
    father: p31,
    mother: p32,
};
hello3(p33);
