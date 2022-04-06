// optional property1 : 있어도 되고 없어도 되는 프로퍼티 사용할 때 '?'

    interface Person2 {
      name: string;
      age?: number;   // 있어도 되고 없어도 되면 ? 를 붙여주기
    }

    function hello2(person: Person2): void {
      console.log(`안녕하세요! ${person.name} 입니다.`);
    }

    // '?' 사용으로 두 가지 다 실행 가능  
    hello2({name: 'John', age: 45})
    hello2({name: 'Seungwon'})




// optional property2 : 어떤 이름의 property가 와도 추가로 설정할 수 있게 해준다. [index: string]: any;

    interface Person3 {
      name: string;
      age?: number; 
      [index: string]: any;
    }

    function hello3(person: Person3): void {
      console.log(`안녕하세요 ${person.name} 입니다.`);
    }

    const p31: Person3 = {
      name: 'John',
      age: 32,
    }; 

    const p32: Person3 = {
      name: 'anna',
      sisters: ['Sung', 'chan']
    }

    const p33: Person3 = {
      name: 'Jane',
      father: p31,
      mother: p32,
    };

    hello3(p33)