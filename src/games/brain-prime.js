import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isPime = (num) => {
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
const prime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
  for (let i = 0; i < 3; i += 1) {
    const num = random(2, 10);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (isPime(num) === answer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPime(num)}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default prime;
