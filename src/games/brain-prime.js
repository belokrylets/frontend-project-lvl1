import { random } from './index.js';

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const correct = (num) => {
  if (num === 2) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const prime = () => {
  const num = random(2, 10);
  return `${num}`;
};
