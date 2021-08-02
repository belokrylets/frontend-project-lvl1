import { random } from './index.js';

export const task = 'Find the greatest common divisor of given numbers.';

export const correct = (numbers) => {
  const arrNumbers = numbers.split(' ');
  arrNumbers[0] = Number(arrNumbers[0]);
  arrNumbers[1] = Number(arrNumbers[1]);
  let result = 0;
  const [num1, num2] = arrNumbers;
  if (num1 < num2) {
    for (let i = num1; i >= 1; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        result = i;
        break;
      }
    }
  }
  if (num1 === num2) {
    result = num1;
  }
  return `${result}`;
};

export const gcd = () => {
  const num1 = random(1, 10);
  const num2 = random(10, 20);
  return `${num1} ${num2}`;
};
