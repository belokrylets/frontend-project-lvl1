import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const num1 = random(1, 50);
const num2 = random(1, 5);
const length = random(5, 10);
const randompog = () => {
  const arr = [];
  let b = 0;
  for (let i = 0; length > i; i += 1, b += num2) {
    arr.push(num1 + b);
  }
  return arr;
};

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arr = randompog();
    const useranswer = arr[random(0, length - 1)];
    arr[random(0, length - 1)] = '..';
    console.log(`Question: ${arr.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(useranswer) === answer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${useranswer}'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default progression;
