import readlineSync from "readline-sync";
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const even = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    let result = "";
    let num = random(1, 30);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question(`Your answer: `);
    if (num % 2 === 0 && answer === "yes") {
      console.log("Correct!");
    } 
    if (num % 2 !== 0 && answer === "no") {
      console.log("Correct!");
    } 
    if (num % 2 === 0 && answer !== "yes") {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        break;
    }
    if (num % 2 !== 0 && answer !== "no") {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
  }
  console.log(`Congratulations, ${name}!`)
  }
};
export default even;
