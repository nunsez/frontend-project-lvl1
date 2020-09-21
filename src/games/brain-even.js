import gameEngine from '../index.js';
import { isEven, rng } from '../tools.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const task = rng(1, 99);
  const rightAnswer = isEven(task) ? 'yes' : 'no';

  return [task, rightAnswer];
};

const evenGameStart = () => gameEngine(rule, gameData);

export default evenGameStart;
