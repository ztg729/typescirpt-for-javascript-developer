export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('a', 1);
console.log(me);
