// boolean
    let isDone: boolean = false;
    isDone = true;
    console.log(typeof isDone) // 'boolean'

    let isOk: Boolean = true;
  //  let isNotOk: boolean = new Boolean(true); // boolean은 primitive, Boolean은 wrapper 객체이므로 boolean으로 써야됨


// number
    let decimal: number = 6; 
    let hex: number = 0xf00d;     // 16진수
    let binary: number = 0b1010;  // 2진수
    let octal: number = 0o744;    // 8진수
    let notANumber: number = NaN; 
    let underscore: number = 1_000_000; // 1000000


// string
    let myName: string = 'Mark';
    myName = 'Anna'; 

    // Template String(`$example`)
        let fullName: string = 'Mark Lee'; 
        let age: number = 24;

        let sentence: string = `Hello, My name is ${fullName}.
        I'll be ${age + 1} years old next month.`; 
        console.log(sentence);
        // Hello, My name is Mark Lee.
        // I'll be 25 years old next month.


// symbol
// 프리미티브 타입의 값을 담아서 사용, 고유하고 수정 불가능한 값으로 만들어준다. 접근을 제어할 때 주로 사용
console.log(Symbol('foo') === Symbol('foo'));

const sym = Symbol();
const obj = {
  [sym]: "value"
}
obj[sym]    // 접근제어