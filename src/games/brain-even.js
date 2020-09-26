import _ from 'lodash';
import runGameEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const task = _.random(1, 99);
  const rightAnswer = isEven(task) ? 'yes' : 'no';

  return [task, rightAnswer];
};

const evenGameStart = () => runGameEngine(rule, getGameData);

export default evenGameStart;
