export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

bmi(1.73, 60);

