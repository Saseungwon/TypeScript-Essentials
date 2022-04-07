// interface끼리 상속하는 방법

    interface IPerson2{
      name: string;
      age?: number;
    }

    interface IKorean extends IPerson2{
      city: string;
    }

    const k: IKorean = {
      name: '사승원',
      city: "대전",
    };

    HTMLDivElement