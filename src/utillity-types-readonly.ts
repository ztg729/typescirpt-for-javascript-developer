export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'a',
  age: 1,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'b',
  age: 2,
};

// friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]?: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
