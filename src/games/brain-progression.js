import gameEngine from '../index.js';
import { makeProgression, rng } from '../tools.js';

const rule = 'What number is missing in the progression?';
const length = 10; // progression length

const gameData = () => {
  const start = rng(0, 10); // progression start element
  const step = rng(1, 5); // progression step
  const hiddenElement = rng(0, length - 1);
  const progression = makeProgression(start, step, length);

  const rightAnswer = progression[hiddenElement];
  // hide element for task mechanics
  progression[hiddenElement] = '..';
  const task = progression.join(' ');

  return [task, rightAnswer.toString()];
};

const progressionGameStart = () => gameEngine(rule, gameData);

export default progressionGameStart;
