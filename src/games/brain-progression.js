import readlineSync from "readline-sync";

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const arrnum1 = random(1, 50);
const arrnum2 = random(1, 50);
const arrnum3 = random(1, 50);

const step = random(2, 5);
const randompog = (num) => {
  const arr = [];
  let b = 0;
  for (let i = 0; random(5, 10) > i; i += 1, b += step) {
    arr.push(num + b);
  }
  return arr;
};

const progression = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!\n`);
  console.log("What number is missing in the progression?");
  let result = "";
  for (let i = 0; i < 3; i += 1) {
    const lostNum = random(2, 5);
    const arrnum1 = random(1, 50);
    const arr1 = randompog(arrnum1);
    arr1[lostNum] = "..";
    result = arr1.join(" ");
    let missingNum = arrnum1 + step * lostNum;
    console.log(`Question: ${result}`);
    const answer = readlineSync.question("Your answer: ");
    if (String(missingNum) === answer) {
      console.log("Correct!\n");
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${missingNum}'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default progression;
