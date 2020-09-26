import _ from 'lodash';
import runGameEngine from '../index.js';

const isPrime = (num) => {
  const maxValue = Math.sqrt(num);

  for (let i = 2; i <= maxValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const task = _.random(1, 47);
  const rightAnswer = isPrime(task) ? 'yes' : 'no';

  return [task, rightAnswer];
};

const primeGameStart = () => runGameEngine(rule, getGameData);

export default primeGameStart;
