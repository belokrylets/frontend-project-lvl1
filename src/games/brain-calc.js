import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(1, 10);
    const num2 = random(1, 10);
    const randomoperator = ['+', '-', '*'];
    const operator = random(0, randomoperator.length - 1);
    let result = 0;
    if (randomoperator[operator] === '+') {
      result = num1 + num2;
    }
    if (randomoperator[operator] === '-') {
      result = num1 - num2;
    }
    if (randomoperator[operator] === '*') {
      result = num1 * num2;
    }
    console.log(`Question: ${num1} ${randomoperator[operator]} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(result) === answer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default calc;
