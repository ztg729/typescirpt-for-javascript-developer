export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('taro', 1);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['b', 2];
const c = new Person(...profile);
