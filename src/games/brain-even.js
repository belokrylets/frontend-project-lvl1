import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = random(1, 30);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (isNumberEven(num) === answer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isNumberEven(num)}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default even;
