export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnkonwn: unknown = kansu();

let sumAny = numberAny + 10;

if (typeof numberUnkonwn === 'number') {
  let sumUnkonwn = numberUnkonwn + 10;
}