import _ from 'lodash';

const isPrime = (num) => {
  const maxValue = Math.sqrt(num);

  for (let i = 2; i <= maxValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const numberOfTries = 3;
const prefix = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = [];
const rightAnswer = [];

for (let i = 0; i < numberOfTries; i += 1) {
  task[i] = _.random(1, 47);
  rightAnswer[i] = isPrime(task[i]) ? 'yes' : 'no';
}

export { prefix, task, rightAnswer, numberOfTries };
