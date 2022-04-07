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



#### TypeScript Context(tsconfig.json)

1. Compilation Context
일종의 팬시한 용어다. 타입스크립트 파일을 자바스크립트화 시키는데 그 과정에서 타입스크립트의 설정을 가미하는 것이다. 
어떤 파일을 컴파일 할 것인지, 안 할 것인지 정한다. 
어떤 컴파일 옵션을 설정할 것인지 적혀있는 context 
tsconfig.json 파일을 사용한다. 

2. compileOnSave
  - true/false(default false)
  - // 파일을 세이브하면 컴파일 시키겠다. 

3. extends
  - tsconfig.json 파일이 다른 파일을 상속 받고 사용할 수 있다. 
  - "extends": "./extendsBase.json", // 경로를 적어줌

4. files, include, exclude
  - 셋다 설정이 없으면, 전부 다 컴파일 하려고 한다. 
  - files
    - 상대 혹은 절대 경로의 리스트 배열이다. 
    - exclude보다 세다. 
  - include, exclude
    - glob페턴(마치 .gitignore)
    - include
      - exclude보다 약함 
    - exclude
      - 설정 안 하면 4가지를 default로 제외
      - outDir은 항상 제외한다. 

5. compileOptions
  - typeRoots
  - types
    - @types 
      - 아무 설정 안 하면
        - node_modules/@types 라는 모든 경로를 찾아서 사용
      - typeRoots 를 사용하면
        - 배열 안에 들어있는 경로들 아래에서만 가져온다.
      - types 를 사용하면
        - 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아온다. 
        - [] 빈 배열을 넣은다는 것은 이 시스템을 이용하지 않겠다는 뜻
      - typeRoots와 types를 같이 사용하지 않는다. 

  - target
    - 빌드의 결과물을 어떤 버전으로 할 것이냐
    - 지정을 안 하면 es3로 지정됨
  - lib
    - 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐
    - lib를 지정하지 않을 때,
      - target이 es3이고 디폴트로 lib.d.ts를 사용
      - target이 es5이고 디폴트로 dom, es5, scripthost를 사용
      - target이 es6이고 디폴트로 dom, es6, dom.iterable, scripthost를 사용
    - lib를 지정하면 그 lib 배열로만 라이브러를 사용한다. 
      - 빈[] => 'no definition found~'

  - outDir, outFile, rootDir
  - **strict(무조건 키고 사용하자)** : 엄격하게 타입을 확인하는 옵션을 켠다. 
    - noImplicitAny
      - 명시적이지 않게 any타입을 사용하여, 표현식과 선언에 사용하면, 에러를 발생
      - 타입 스크립트가 추론을 실패한 경우, any가 맞으면 any라고 지정하라.
      - 아무것도 쓰지 않으면, 에러를 발생
      - 이 오류를 해결하면, any라고 지정되어 있지 않은 경우는 any가 정말 아닌거다. 타입추론이 된 것이기 때문에 

    - noImplicitThis
      - 명시적이지 않게 any타입을 사용하여 this 표현식에 사용하면 에러를 발생한다. 
      - 첫 번째 매개벼수 자리에 this를 놓고 this에 대한 타입을 어떤 것이라도 표현하지 않으면, noImplicitAny가 오류를 발생시킨다. 
      - js에서는 매개변수에 this를 넣으면 이미 예약된 키워드라 syntaxerror 발생시킨다. 
      - this를 any로 명시적으로 지정하는 것은 합리적이다.(물론 구체적인 사용처가 있으면 타입을 표현하기도 한다.)
      - this를 최대한 제한해주는 것이 타입적으로는 안전하게 처리가 될 것이다. 
    
    - strictNullChecks
      - 켜지 않으면 
        - 모든 타입은 null, undefined 값을 가질 수 있다.
        - string으로 타입을 지정해도 null, undefined 값을 할당할 수 있다는 것이다. 
      - 켜면
        - 모든 타입은 null, undefined 값을 가질 수 없고, 가지려면 union type을 이용해서 직접 명시해야한다.
        - any 타입은 null, undefined를 가진다. 
      - strictNullChecks를 적용하지 않으면 null, undefined를 가진다는 것을 암묵적으로 인정하고 사용하기 때문에, 정확히 어떤 타입이 오는 지를 개발자가 스스로 간과할 수 있다. null, undefined를 가질 수 있는 경우 해당 값을 조건부로 제외하고 사용하는 것이 좋다. 
      - 사용하려는 함수를 선언할 때부터 매개변수와 리턴 값에 정확한 타입을 지정하려는 노력을 기울여야하고, 기울이게 될 것이다. 

    - strictFunctionTypes
      - 함수 타입에 대한 bivariand 매개변수 검사를 비활성화합니다. 
      - 반환타입은 공변적이어야 하고, 인자타입은 반공변적이어야 한다. 그런데 타입스크립트에서 인자타입은 공변적이면서, 반공변적인 것이 문제다. 
      - 이 문제를 해결하는 것이 strictFunctionTypes -> 옵션을 켜면 에러가 안 나던 것을 에러가 생기게 해준다. 

    - strictPropertyInitialization
      - 정의되지 않은 클래스의 속성이 생성자에게 초기화되었는지 확인한다.
      - 이 옵션을 사용하려면 -strictNullChecks를 사용하도록 설정해야한다. 

    - strictBindCallApply
      - bind, call, apply에 대한 더 엄격한 검사 수행 

    - alwaysStrict
      - 각 소스 파일에 대해 js의 strict mode로 코드를 분석하고, "엄격하게 사용"을 해제한다.