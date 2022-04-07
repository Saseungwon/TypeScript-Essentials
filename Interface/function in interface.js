"use strict";
// 방법1
const p41 = {
    name: "John",
    age: 42,
    hello: function () {
        console.log(`안녕하세요! ${this.name}입니다.`);
    },
};
// 방법2
const p42 = {
    name: "John",
    age: 42,
    hello() {
        console.log(`안녕하세요! ${this.name}입니다.`);
    },
};
// 방법3
// const p43: Person4 = {
//   name: "John",
//   age: 42,
//   hello: (this: Person4): void => {
//     console.log(`안녕하세요! ${this.name}입니다.`);
//   },
// }; 
p41.hello();
p42.hello();
