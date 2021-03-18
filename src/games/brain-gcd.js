import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const delitel = (num1, num2) => {
  let result = 0;
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
  return result;
};
const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(1, 100);
    const num2 = random(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(delitel(num1, num2)) === answer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${delitel(num1, num2)}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default gcd;
