export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'a', underTwenty: false };

profile.name = 'a';
profile.age = 1;
profile.nationality = 'C';
