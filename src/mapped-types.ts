export {};

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

type PartialProfile = Partial<Profile>;

type PropertyTypes = keyof Profile;

type Optional<T> = {
  [A in keyof T]?: T[A] | null;
};

type OptionalProfile = Optional<Profile>;
