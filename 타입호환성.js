"use strict";
// 서브타입
// sub1 타입은 sup1 타입의 서브 타입이다. 
let sub1 = 1;
let sup = sub1;
sub1 = sup1; //err sup 타입을 sub에 넣을 수 없다. 
// sub2 타입은 sup2의 서브(하위)타입이다. 
let sub2 = [1];
let sup2 = sub2;
sub2 = sup2; //err 
// sub3 타입은 sup3 타입의 서브 타입이다. 
let sub3 = [1, 2]; // 튜플
let sup3 = sub3; // 배열
sub3 = sup3; // 배열 > 튜풀
// sub4 타입은 sup4 타입의 서브 타입이다. 
let sub4 = 1;
let sup4 = sub4;
sub4 = sup4; // any는 에러를 발생시키지 않고 다 된다.
// sub5 타입은 sup5 타입의 서브 타입이다. 
let sub5 = 0;
let sup5 = sub5;
sub5 = sup5; // never x
class Animal {
}
class Dog extends Animal {
    eat() { }
}
// sub6 타입은 sup6 타입의 서브 타입이다. 
let sub6 = new Dog();
let sup6 = sub6;
sub6 = sup6; // dog에는 animal을 할당 불가 eat이 없기 때문에
// 1. 같거나 서브타입인 경우에는 할당이 가능하다 -> 공변
// 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. -> 반병 
