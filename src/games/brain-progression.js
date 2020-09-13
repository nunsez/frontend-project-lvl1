import _ from 'lodash';

const numberOfTries = 3;
const prefix = 'What number is missing in the progression?';

const progressionStep = [];
const progressionStart = [];
const progressionLength = 10;
const progression = [];
const gameElement = [];

const task = [];
const rightAnswer = [];

for (let i = 0; i < numberOfTries; i += 1) {
  progressionStep[i] = _.random(1, 5);
  progressionStart[i] = _.random(0, 10);
  gameElement[i] = _.random(0, 9);
  const currentString = [];

  for (let j = 0; j < progressionLength; j += 1) {
    currentString.push(progressionStart[i] + progressionStep[i] * j);
  }
  progression.push(currentString);

  rightAnswer[i] = progression[i][gameElement[i]];
  progression[i][gameElement[i]] = '..';
  task[i] = progression[i].join(' ');
}

export { prefix, task, rightAnswer, numberOfTries };
