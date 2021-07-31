import { random } from './index.js';

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const correct = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const even = () => {
  const num = random(1, 30);
  return `${num}`;
};
