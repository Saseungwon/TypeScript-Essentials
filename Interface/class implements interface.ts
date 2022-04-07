// interface로부터 class를 implements하는 방법

interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string){
    this.name = name;
  }
  hello(): void {
    console.log(`안녕하세요 ${this.name} 입니다.`)
  }
}

const person: IPerson1 = new Person("MARK");
person.hello(); 
