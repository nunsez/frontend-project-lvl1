import { cons } from '@hexlet/pairs';
import _ from 'lodash';
import gameEngine, { numberOfTries } from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const gcdGameStart = () => {};

const rule = 'Find the greatest common divisor of given numbers.';

const num1 = [];
const num2 = [];
const tasks = [];
const rightAnswers = [];
const gcdProtectors = []; // protect the game from multiple '1' answers

for (let i = 0; i < numberOfTries; i += 1) {
  gcdProtectors[i] = _.random(1, 10);
  num1[i] = gcdProtectors[i] * _.random(1, 10);
  num2[i] = gcdProtectors[i] * _.random(1, 10);
  tasks[i] = `${num1[i]} ${num2[i]}`;
  rightAnswers[i] = gcd(num1[i], num2[i]);
}

const gameData = cons(tasks, rightAnswers);

gameEngine(rule, gameData);

export default gcdGameStart;
