import { cons } from '@hexlet/pairs';
import _ from 'lodash';
import gameEngine, { numberOfTries } from '../index.js';

const isEven = (number) => number % 2 === 0;

const evenGameStart = () => {};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const tasks = [];
const rightAnswers = [];

for (let i = 0; i < numberOfTries; i += 1) {
  tasks[i] = _.random(1, 99);
  rightAnswers[i] = isEven(tasks[i]) ? 'yes' : 'no';
}

const gameData = cons(tasks, rightAnswers);

gameEngine(rule, gameData);

export default evenGameStart;
