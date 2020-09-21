import gameEngine from '../index.js';
import { isPrime, rng } from '../tools.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const task = rng(1, 47);
  const rightAnswer = isPrime(task) ? 'yes' : 'no';

  return [task, rightAnswer];
};

const primeGameStart = () => gameEngine(rule, gameData);

export default primeGameStart;
