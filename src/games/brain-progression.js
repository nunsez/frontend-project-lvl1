import { cons } from '@hexlet/pairs';
import _ from 'lodash';
import gameEngine, { numberOfTries } from '../index.js';

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const progressionGameStart = () => {};

const rule = 'What number is missing in the progression?';

const progressionLength = 10;
const progressionStart = [];
const progressionStep = [];
const progression = [];
const gameElement = [];

const tasks = [];
const rightAnswers = [];

for (let i = 0; i < numberOfTries; i += 1) {
  progressionStep[i] = _.random(1, 5);
  progressionStart[i] = _.random(0, 10);
  gameElement[i] = _.random(0, progressionLength - 1);

  // prettier-ignore
  progression.push(makeProgression(progressionStart[i], progressionStep[i], progressionLength));

  rightAnswers[i] = progression[i][gameElement[i]];
  progression[i][gameElement[i]] = '..';
  tasks[i] = progression[i].join(' ');
}

const gameData = cons(tasks, rightAnswers);

gameEngine(rule, gameData);

export default progressionGameStart;
