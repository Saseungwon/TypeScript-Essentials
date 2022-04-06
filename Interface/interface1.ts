// Person1 이라는 interface를 만들기 

  // Person1 이라는 타입을 다른 곳에 사용할 수 있게 된다. 
    interface Person1 {
      name: string;
      age: number
    }

    function hello1(person: Person1): void {
      console.log(`안녕하세요 ${person.name} 입니다.`);
    }

    const p1: Person1 = {
      name: "John",
      age: 34,
    };

    hello1(p1); 