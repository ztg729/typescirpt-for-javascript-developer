export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'a';
  static lastName: string = 'b';

  static work() {
    // return 'hey, guys! are you interested in typescript?';
    return `hey, guys! This is ${this.firstName}! are you interested in typescript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
