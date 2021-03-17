import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gamelogic = (task, answer) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);
    console.log(`${task}`);
    for (let i = 0; i < 3; i += 1) {
        const quest = random(1, 30)
        console.log(`Question: ${quest}`);
        const useranswer = readlineSync.question('Your answer: ');
        if (answer === useranswer) {
        console.log('Correct!\n');
        } else {
        return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
        }
    }
    console.log(`Congratulations, ${name}!`);
  };
export default gamelogic;