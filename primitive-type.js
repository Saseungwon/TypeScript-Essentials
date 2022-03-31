"use strict";
// boolean
let isDone = false;
isDone = true;
console.log(typeof isDone); // 'boolean'
let isOk = true;
//  let isNotOk: boolean = new Boolean(true); // boolean은 primitive, Boolean은 wrapper 객체이므로 boolean으로 써야됨
// number
let decimal = 6;
let hex = 0xf00d; // 16진수
let binary = 0b1010; // 2진수
let octal = 0o744; // 8진수
let notANumber = NaN;
let underscore = 1000000; // 1000000
// string
let myName = 'Mark';
myName = 'Anna';
// Template String(`$example`)
let fullName = 'Mark Lee';
let age = 24;
let sentence = `Hello, My name is ${fullName}.
        I'll be ${age + 1} years old next month.`;
console.log(sentence);
// Hello, My name is Mark Lee.
// I'll be 25 years old next month.
// symbol
console.log(Symbol('foo') === Symbol('foo'));
