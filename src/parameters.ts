export {};

const debugProfile = (name: string, age: number) => {
  console.log(name, age);
};

debugProfile('a', 1);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['b', 2];

debugProfile(...profile);