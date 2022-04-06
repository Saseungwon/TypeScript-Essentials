"use strict";
// Person1 이라는 interface를 만들기 
function hello1(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
const p1 = {
    name: "John",
    age: 34,
};
hello1(p1);
