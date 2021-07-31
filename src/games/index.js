import readlineSync from 'readline-sync';

export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gameLogic = (task, answer, quest) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(`${task}`);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${quest}`);
    const useranswer = readlineSync.question('Your answer: ');
    if (answer === useranswer) {
      console.log('Correct!\n');
    } return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!`);
};
