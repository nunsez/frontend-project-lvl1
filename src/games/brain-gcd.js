import _ from 'lodash';
import runGameEngine from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const rule = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const gcdProtector = _.random(1, 10); // protect the game from answer '1'
  const num1 = gcdProtector * _.random(1, 10);
  const num2 = gcdProtector * _.random(1, 10);

  const task = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2);

  return [task, rightAnswer.toString()];
};

const gcdGameStart = () => runGameEngine(rule, getGameData);

export default gcdGameStart;
