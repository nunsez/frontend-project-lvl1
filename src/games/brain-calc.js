import _ from 'lodash';
import runGameEngine from '../index.js';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const rule = 'What is the result of the expression?';

// when the number of operations increases, don't forget to look at the calculate() above
const operations = ['+', '-', '*'];

const getGameData = () => {
  const num1 = _.random(1, 49);
  const num2 = _.random(1, 49);
  // define operation
  const index = _.random(0, operations.length - 1);
  const operation = operations[index];

  const task = `${num1} ${operation} ${num2}`;
  const rightAnswer = calculate(num1, num2, operation);

  return [task, rightAnswer.toString()];
};

const calcGameStart = () => runGameEngine(rule, getGameData);

export default calcGameStart;
