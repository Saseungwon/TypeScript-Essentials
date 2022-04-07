// type alias VS interface

    // 1. function 

        // type alias
        type EatType = (food: string) => void;

        // interface
        interface IEat {
          (food: string): void;
        }


    // 2. array

        // type alias
        type PersonList = string[];

        // interface
        interface IPersonList {
          [index: number]: string;
        }


    // 3. intersection

        interface ErrorHandling {
          success: boolean;
          error?: {message: string};
        }

        interface ArtistsData {
          artists: {name: string}[];
        }

        // type alias
        type ArtistsResponseType = ArtistsData & ErrorHandling;

        // interface
        interface IArtistsResponse extends ArtistsData, ErrorHandling {}

        let art: ArtistsResponseType;
        let iar: IArtistsResponse; 


    // 4. union types

        interface Bird {
          fly(): void;
          layEggs(): void;
        }

        interface Fish {
          swim(): void;
          layEggs(): void;
        }

        type PetType = Bird | Fish;

        // 유니온 타입은 상속해줄 수도, 임플리먼트로 넣어줄 수도 없다.
        interface IPet extends PetType {}   
        class Pet implements PetType {}



    // 5. Declaration Merging - interface

        interface MergingInterface {
          a: string;
        }
        interface MergingInterface {
          b: string;
        }
        let mi: MergingInterface;
        mi.a;  // 머징 됐기 때문에 a,b 둘다 사용가능 
        mi.b;


    // 6. Declaration Merging - type alias
        type MergingType = {
          a: string;
        }
        type MergingType = {
          b: string;
        }


