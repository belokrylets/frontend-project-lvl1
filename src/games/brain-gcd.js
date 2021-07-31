import { random } from './index.js';

export const task = 'Find the greatest common divisor of given numbers.';

export const correct = (num) => {
  const arr = num.split(' ');
  let result = 0;
  if (arr[0] > arr[1]) {
    for (let i = arr[1]; i >= 1; i -= 1) {
      if (arr[0] % i === 0 && arr[1] % i === 0) {
        result = i;
        break;
      }
    }
  }
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i >= 1; i -= 1) {
      if (arr[0] % i === 0 && arr[1] % i === 0) {
        result = i;
        break;
      }
    }
  }
  if (arr[0] === arr[1]) {
    result = arr[1];
  }
  return `${result}`;
};

export const gcd = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  return `${num1} ${num2}`;
};
