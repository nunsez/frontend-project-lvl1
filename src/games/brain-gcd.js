import gameEngine from '../index.js';
import { gcd, rng } from '../tools.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const gcdProtector = rng(1, 10); // protect the game from answer '1'
  const num1 = gcdProtector * rng(1, 10);
  const num2 = gcdProtector * rng(1, 10);

  const task = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2);

  return [task, rightAnswer.toString()];
};

const gcdGameStart = () => gameEngine(rule, gameData);

export default gcdGameStart;
