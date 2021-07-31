import { random } from './index.js';

export const task = 'What number is missing in the progression?';

const step = random(2, 5);
const randomProg = (num) => {
  const arr = [];
  let b = 0;
  for (let i = 0; random(5, 10) > i; i += 1, b += step) {
    arr.push(num + b);
  }
  return arr;
};

export const progression = () => {
  const lostNum = random(2, 5);
  const firstNum = random(1, 50);
  const arr1 = randomProg(firstNum);
  arr1[lostNum] = '..';
  const result = arr1.join(' ');
  return `${result}`;
};

export const correct = (prog) => {
  const arr = prog.split(' ');
  const firstNum = Number(arr[0]);
  const lostNum = arr.indexOf('..');
  const result = step * lostNum + firstNum;
  return `${result}`;
};
