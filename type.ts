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



// Undefined & Null 
    // 그 자체로는 그다지 유용하지 않음
    // 둘다 소문자만 존재한다. 

    // 이 변수들에 할당할 수 있는 것들은 거의 없다. 
    // tsconfig에 설정하지 않고 사용하면 모든 다른 타입들의 서브타입이 된다, --strictNullChecks를 사용하면 null과 undefined, void를 자기 자신들에게만 할당할 수 있다.
    // 다른 타입, 예로 number에 null과 undefined를 할당할 수 있게 하려면 union type을 이용해야한다. 

    // let myName: string = null;     ->  strict 를 끄면 오류 해제되지만 그렇게 쓰면 불안정해서 하지말자
    let u: undefined = null;      // null은 undefined에 할당할 수 없다. 
    let v: void = undefined;

    let union: string | null = null;  // | 로 union 표기하여 null을 넣을 수 있게 만든다. 
    union = "Mark"; 



// Object
    // 프리미티브 타입이 아닌 것을 나타내고 싶을 때 사용하는 타입 
    const person1 = {name: "John", age: 39};
    const person2 = Object.create({name: "John", age: 39}); // object | null -> union 타입임

    //example
    // 프리미티브 타입을 쓰면 에러를 뱉을거야! 선언
    declare function create (o: object| null):void;
    create({prop:0});
    create(null);
    create(42);           //err
    create("string")      //err
    create(false)         //err
    create(undefined)     //err



// Array
    // 방식
    let list: (number | string)[] = [1, 2, 3, "4"];           // => 더 선호되는 방식
    let list2: Array<number> = [1, 2, 3]; 



// tuple
    // 길이가 정해져있고 각 자리의 타입이 정확한 자료형이다. 
    let x: [string, number]; 
    x = ["hello", 39]; 
    x = [10, "Mark"]  // 타입이 엇갈려서 들어감
    x[3]              // 길이가 안 맞아서

    const person: [string, number] = ["Mark", 39];
    const [first, second, third] = person;    // length가 안 맞아서


// any
    // 어떤 타입이어도 상관 없는 타입, 최대한 안 쓰는 게 핵심
    // any를 많이 써서 편의를 얻는다면 안전성을 잃게 되는 대가로 돌아온다. 그러므로 any를 사용하지 않도록 해야한다. 
    function returnAny(message: any): any {
      console.log(message);
    }
    const any1 = returnAny('리턴은 아무거나')
    any1.toString();

    let looselyTyped: any = {}; 
    const d = looselyTyped.a.b.c.d; // any의 전파성, 안정성 잃게된다. 

    function leakingAny(obj: any){
      const a: number = obj.num;    // number로 지정해줘서 누수를 막는다. 
      const b = a + 1;
      return b;  
    }
    const c = leakingAny({num:0}); 
    c.indexOf("0");



// unknown
    // 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있다. 이런 묘사를 any로 하게되면 타입의 안정성을 해친다.
    // 안정성의 확보를 위해 unknown을 쓰게 되었다. 
    // any처럼 아무거나 할당할 수 있지만 타입을 확정해주지 않으면 다른곳에 할당할 수 없고, 사용할 수 없다. 
    declare const maybe: unknown;
    const aNumber: number = maybe;    // any였다면 허용됨

    // 타입가드
    if(maybe === true) { 
      const aBoolean: boolean = maybe;
      const aString: string = maybe; 
    }


    if(typeof maybe === "string") {
      const aString: string = maybe;
      const aBoolean: boolean = maybe;
    }


    
// never
    // never는 모든 타입의 서브타입이며, 모든 타입에 할당할 수 있다. 
    // 하지만 never에는 그 어떤 것도 할당할 수 없다. any도 never에 할당할 수 없다. 
    // 잘못된 타입을 넣는 실수를 막고자 할 때 사용된다. 
    function error(message: string): never {
      throw new Error(message);
    }

    function fail(){
      return error('failed'); 
    }

    function infiniteLoop(): never {
      while(true){
      }
    }

    let e: string = "hello";
    if(typeof e !== 'string'){
      e; // never => a는 string인데 if string이 아닌 것들을 반환하게 했으니까 never다. 잘못된 타입을 넣는 실수를 없앤다. 
    } 

    declare const f: string | number ;
    if(typeof f !== 'string'){      // string|number에서 string을 빼서 number만 남았음
      f; 
    }

    type Indexable<T> = T extends string ? T & {[index: string]: any} : never;
    type ObjectIndexable = Indexable<{}>; // 잘못된 타입을 넣으면 never가 나오도록 하기 



// void
    // 리턴으로 뭘 하지 않겠다라는 선언
    function returnVoid(message: string): void {    // return으로 뭘하지 않겠다 라는 선언
      console.log(message);
      return undefined;   // 유일하게 undefined만 사용가능 
    }
    returnVoid('리턴이 없다.')
