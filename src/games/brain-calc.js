import gameEngine from '../index.js';
import { calculate, rng } from '../tools.js';

const rule = 'What is the result of the expression?';

// when the number of operations increases, don't forget to look at the calculate() in '../tools.js'
const operations = ['+', '-', '*'];

const gameData = () => {
  const num1 = rng(1, 49);
  const num2 = rng(1, 49);
  // define operation index
  const index = rng(0, operations.length - 1);

  const task = `${num1} ${operations[index]} ${num2}`;
  const rightAnswer = calculate(num1, num2, operations[index]);

  return [task, rightAnswer.toString()];
};

const calcGameStart = () => gameEngine(rule, gameData);

export default calcGameStart;
