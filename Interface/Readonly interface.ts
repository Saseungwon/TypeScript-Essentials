// Readonly interface
    // 타입스크립트를 사용하는 목적 중 하나가 코드에 의도를 담아서 다른 사람들이 이 코드를 사용하거나 수정할 때 의사표현을 하는 것이다.

        interface Person8 {
          name: string;
          age?: number;
          readonly gender: string;      // 읽긱 전용 속성
        }

        const p81: Person8 = {
          name: 'Mark',
          gender: 'male'
        }

        p81.gender = 'female';      // readonly이기 때문에 할당 안 됨