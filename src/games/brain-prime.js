import { cons } from '@hexlet/pairs';
import _ from 'lodash';
import gameEngine, { numberOfTries } from '../index.js';

const isPrime = (num) => {
  const maxValue = Math.sqrt(num);

  for (let i = 2; i <= maxValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const primeGameStart = () => {};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const tasks = [];
const rightAnswers = [];

for (let i = 0; i < numberOfTries; i += 1) {
  tasks[i] = _.random(1, 47);
  rightAnswers[i] = isPrime(tasks[i]) ? 'yes' : 'no';
}

const gameData = cons(tasks, rightAnswers);

gameEngine(rule, gameData);

export default primeGameStart;
