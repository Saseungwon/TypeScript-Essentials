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
  - Undefined
  - Symbol
  - Array: object

- ts에서 추가된 타입
  - Any, Void, Never, Unknown
  - Enum
  - Tuple: object형


