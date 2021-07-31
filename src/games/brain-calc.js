import { random } from './index.js';

export const task = 'What is the result of the expression?';

export const calc = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const operator = ['+', '-', '*'];
  const index = random(0, 2);
  return `${num1} ${operator[index]} ${num2}`;
};
export const correct = (calc) => {
  const arr = calc.split(' ');
  let result = 0;
  if (arr[1] === '+') {
    result = Number(arr[0]) + Number(arr[2]);
  }
  if (arr[1] === '-') {
    result = Number(arr[0]) - Number(arr[2]);
  }
  if (arr[1] === '*') {
    result = Number(arr[0]) * Number(arr[2]);
  }
  return `${result}`;
};
