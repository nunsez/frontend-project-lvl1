import { cons } from '@hexlet/pairs';
import _ from 'lodash';
import gameEngine, { numberOfTries } from '../index.js';

const calculator = (num1, num2, operation) => {
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

const calcGameStart = () => {};

const rule = 'What is the result of the expression?';

const operations = ['+', '-', '*'];
const indexes = []; // operation indexes
const num1 = [];
const num2 = [];

const tasks = [];
const rightAnswers = [];

for (let i = 0; i < numberOfTries; i += 1) {
  num1[i] = _.random(1, 49);
  num2[i] = _.random(1, 49);
  indexes[i] = _.random(0, operations.length - 1);
  tasks[i] = `${num1[i]} ${operations[indexes[i]]} ${num2[i]}`;
  rightAnswers[i] = calculator(num1[i], num2[i], operations[indexes[i]]);
}

const gameData = cons(tasks, rightAnswers);
gameEngine(rule, gameData);

export default calcGameStart;
