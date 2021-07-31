import readlineSync from 'readline-sync';

export default (task, correct, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(`${task}`);
  for (let i = 0; i < 3; i += 1) {
    const quest = question();
    const correctAnswer = correct(quest);
    console.log(`Question: ${quest}`);
    const useranswer = readlineSync.question('Your answer: ');
    if (correctAnswer === useranswer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
