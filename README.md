## TypeScript

#### 특징
1. 타입스크립트는 타입을 추가하여 자바스크립트를 확장시킨다. 
2. 타입스크립트는 자바스크립트를 이해함으로써 코드를 실행하기 전에 에러를 고치는 데에 들어가는 시간을 절약한다. 
3. 오픈소스
4. 자바스크립트를 강화시킨 언어
5. 순수한 자바스크립트로 컴파일 해준다. 
6. 전통적인 Compile 언어와는 다른 점이 많아서 Transpile 이라는 용어를 사용하기도 한다.

#### 사용
- TypeScript를 브라우저에서 실행시키려면 TypeScript Compiler를 사용해 Plain JavaScript로 바꿔 실행할 수 있게 된다. 



#### 실행

- node.js
chrome's V8 JavaScript Engine을 사용하여, 자바스크립트를 해석하고 OS 레벨에서의 API를 제공하는 서버사이드용 자바스크립트 런타임 환경

- browser
HTML을 동적으로 만들기 위해 브라우저에서 자바스크립트를 해석하고, DOM을 제어할 수 있도록 하는 자바스크립트 런타임 환경


#### TS 컴파일러 글로벌로 설치
- 설치
npm install typescript -g
- 실행
tsc test.ts(특정파일명시)
- 설정파일 자동생성(tsconfig.json)
tsc --init
- 파일 수정되었을 때마다 새로 컴파일
tsc -w


#### TS 컴파일러 프로젝트에만 설치
```bash
➜  TypeScript mkdir tsc-project
➜  TypeScript cd tsc-project 
➜  tsc-project npm init -y
{
  "name": "tsc-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

➜  tsc-project ls
package.json
➜  tsc-project npm i typescript
➜  tsc-project cat package.json
{
  "name": "tsc-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "typescript": "^4.6.3"
  }
}

➜  tsc-project ls node_modules 
typescript

// 실행
➜  tsc-project npx tsc --init

➜  tsc-project nano test.ts
➜  tsc-project npx tsc
➜  tsc-project npx tsc -w

// package.json 수정
➜  tsc-project nano package.json
{
  "name": "tsc-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "typescript": "^4.6.3"
  }
}

// 실행
➜  tsc-project npm run build
```



#### 타입
- ECMAScript Primitive Type 6가지
  - Boolean
  - Number
  - String
  - Null
    - 무언가가 있는데, 사용할 준비가 덜 된 상태
    - null은 null만 가질 수 있음
    - typeof 하면 object로 나옴 
  - Undefined
    - 값을 할당하지 않은 변수는 undefined라는 값을 가진다. 
    - 아예 준비가 안 된 상태
    - typeof 하면 undefined 나옴 
  - Symbol
  - Array: object

- ts에서 추가된 타입
  - Any, Void, Never, Unknown
  - Enum
  - Tuple: object형





#### 타입 시스템 종류

1. 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템 
2. 컴파일러가 자동으로 타입을 추론하는 시스템
 
- 타입스크립트의 타입 시스템
   - 타입을 명시적으로 지정가능
   - 명시적으로 지정하지 않으면 컴파일러가 자동으로 타입을 추론 

- 타입이란 해당 변수가 할 수 있는 일을 결정한다. 
- 타입스크립트의 추론에 의지하는 경우
```ts
// a의 타입을 명시적으로 지정하지 않은 경우이기 때문에 a는 any로 추론된다. 
function f3(a) {
  return a * 38; 
}
// 사용자는 a가 any이기 때문에, 사용법에 맞게 문자열을 사용하여 함수를 실행했다. 
console.log(f3( 10 ) )   // 380
console.log(( f3 ( 'Mark' ) + 5))   // NaN
```

- nolmplicitAny옵션
  - 타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론 중 any라고 판단하게 되면 컴파일 에러를 발생시켜 명시적으로 지정하게 한다.

- strictNullChecks
  - 모든 타입에 자동으로 포함되어 있는 null, undefined를 제거해준다. 무조건 켜야한다. 

- noImplicitReturns
  - 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴팡리 에러를 발생시킨다. 

- object literal typescript
```js
function f7(a: {name: string; age: number}): string{
  return  ~~~
}
```
- 나만의 타입을 만드는 방법
```js
interface PersonInterface {
  name: string; 
  age: number;
}

type PersonTypeAlias = {
  name: string;
  age: number;
}

function f8(a: PersonInterface): string {
  return ~~~
}
```


#### Structural Type System vs Nominal Type System
- Structural Type System : 구조가 같으면 같은 타입으로 취급 -> TypeScript는 이거
- Nominal Type System : 구조가 같아도 이름이 다르면 다른 타입

#### 타입호환성
- strictFunctionType을 켜면 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아니면 에러를 통해 경고한다. 
```ts
// 서브타입

    // sub1 타입은 sup1 타입의 서브 타입이다. 
    let sub1: 1 = 1;
    let sup: number = sub1; 
    sub1 = sup1; //err sup 타입을 sub에 넣을 수 없다. 

    // sub2 타입은 sup2의 서브(하위)타입이다. 
    let sub2: number[] = [1]; 
    let sup2: object = sub2;
    sub2 = sup2; //err 

    // sub3 타입은 sup3 타입의 서브 타입이다. 
    let sub3: [number, number] = [1, 2];  // 튜플
    let sup3: number[] = sub3;            // 배열
    sub3 = sup3 // 배열 > 튜풀

    // sub4 타입은 sup4 타입의 서브 타입이다. 
    let sub4: number = 1; 
    let sup4: any = sub4; 
    sub4 = sup4;          // any는 에러를 발생시키지 않고 다 된다.

    // sub5 타입은 sup5 타입의 서브 타입이다. 
    let sub5: never = 0 as never; 
    let sup5: number = sub5;
    sub5 = sup5;      // never x

    class Animal {}
    class Dog extends Animal{
      eat(){}
    }

    // sub6 타입은 sup6 타입의 서브 타입이다. 
    let sub6: Dog = new Dog()
    let sup6: Animal = sub6;
    sub6 = sup6  // dog에는 animal을 할당 불가 eat이 없기 때문에

        // 1. 같거나 서브타입인 경우에는 할당이 가능하다 -> 공변
        // 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. -> 반병 
```

#### Type Alias(타입 별칭)
- Interface와 비슷함
- primitive, Union Type, Tuple, Function
- 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있다. 
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아니다. 

1. Aliasing Primitive
 - 딱히 의미 없음
```ts
type MyStringType = string; 
const str = 'world';
let myStr: MyStringType = 'hello';
myStr = str; // 딱히 의미 없는 것
```

2. Aliasing Union Type
 - 유니온 타입은 A도 가능하고 B도 가능한 타입
 - 길게 쓰는 걸 짧게 해줌
```js
let person: string | number = 0;
type  StringOrNuber = string | number; 
let anoter: StringOrNumber = 0; 
another = 'Anna'; 
```

3. Aliasing Tuple
 - 튜플 타입에 별칭을 줘서 여러군데에서 사용할 수 있게 해줌 
```ts
let person: [string, number] = ['Mark', 35]; 
type PersonTuple = [string, number]; 
let anoter: PersonTuple = ['Anna', 24]; 
```

4. Aliasing Function
 - 길게 쓰는 것 짧게 해줌
```ts
type EatType = (food: string) => void; 
```