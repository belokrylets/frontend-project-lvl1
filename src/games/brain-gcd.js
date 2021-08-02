import { random } from './index.js';

export const task = 'Find the greatest common divisor of given numbers.';

export const correct = (num) => {
  const arr = num.split(' ');
  let result = 0;
  const [num1, num2] = arr;
  if (num1 > num2) {
    for (let i = num2; i >= 1; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        result = i;
        break;
      }
    }
  }
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
  const num2 = random(1, 10);
  return `${num1} ${num2}`;
};
