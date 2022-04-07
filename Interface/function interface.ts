// function interface

    interface HelloPerson {
      (name: string, age?: number): void;
    }

    const helloPerson: HelloPerson = function (name: string, age: number){  // 뒤에 에러 확인
      console.log(`안녕하세요! ${name}입니다.`);
    }

    helloPerson("Mark", 44)