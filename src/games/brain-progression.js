import _ from 'lodash';
import runGameEngine from '../index.js';

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const rule = 'What number is missing in the progression?';
const length = 10; // progression length

const getGameData = () => {
  const start = _.random(0, 10); // progression start element
  const step = _.random(1, 5); // progression step
  const hiddenElementIndex = _.random(0, length - 1);
  const progression = makeProgression(start, step, length);

  const rightAnswer = progression[hiddenElementIndex];
  // hide element for task mechanics
  progression[hiddenElementIndex] = '..';
  const task = progression.join(' ');

  return [task, rightAnswer.toString()];
};

const progressionGameStart = () => runGameEngine(rule, getGameData);

export default progressionGameStart;
