export {};

let bmi: (height: number, weight: number) => number = function (height, weight){
  return weight / (height * height);
};
