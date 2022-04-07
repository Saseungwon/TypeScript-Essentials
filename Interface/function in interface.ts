// interface에서 함수 만들기

    interface Person4 {
      name: string;
      age: number;
      hello(): void;
    }

    // 방법1
    const p41: Person4 = {
      name: "John",
      age: 42,
      hello: function(): void {
        console.log(`안녕하세요! ${this.name}입니다.`)
      },
    }; 

    // 방법2
    const p42: Person4 = {
      name: "John",
      age: 42,
      hello(this: Person4): void {
        console.log(`안녕하세요! ${this.name}입니다.`)
      },
    }; 

    // 실행
    p41.hello();
    p42.hello();