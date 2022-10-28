export {};
//exclude
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;

type TypeExcludingFunction = Exclude<SomeTypes, Function>;

//extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type TypeExtractingFunction = Extract<SomeTypes, Function>;

//nunnullable

type NullableTypes = string | number | null | undefined;
type NonNulalableTypes = NonNullable<NullableTypes>;
