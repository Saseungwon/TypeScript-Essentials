"use strict";
// interface로부터 class를 implements하는 방법
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }
}
const person = new Person("MARK");
person.hello();
