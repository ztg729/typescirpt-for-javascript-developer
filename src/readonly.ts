export {};

class VisaCard {
  // readonly owner: string;

  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('a');
console.log(myVisaCard);
// myVisaCard.owner = 'b';
