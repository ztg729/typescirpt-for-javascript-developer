export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

const example1: {
  name: Mojiretsu;
  age: number;
} = {
  name: 'a',
  age: 1,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'a',
  age: 1,
};

type Profile2 = typeof example1;
