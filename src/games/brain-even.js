import _ from 'lodash';

const numberOfTries = 3;
const prefix = 'Answer "yes" if the number is even, otherwise answer "no".';

const task = [];
const rightAnswer = [];

for (let i = 0; i < numberOfTries; i += 1) {
  task[i] = _.random(1, 99);
  rightAnswer[i] = task[i] % 2 === 0 ? 'yes' : 'no';
}

export { prefix, task, rightAnswer, numberOfTries };
