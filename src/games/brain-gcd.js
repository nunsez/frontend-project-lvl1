import _ from 'lodash';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const numberOfTries = 3;
const prefix = 'Find the greatest common divisor of given numbers.';

const firstNumber = [];
const secondNumber = [];
const task = [];
const rightAnswer = [];
const gcdProtector = []; // protect the game from multiple '1' answers

for (let i = 0; i < numberOfTries; i += 1) {
  gcdProtector[i] = _.random(1, 10);
  firstNumber[i] = gcdProtector[i] * _.random(1, 10);
  secondNumber[i] = gcdProtector[i] * _.random(1, 10);
  task[i] = `${firstNumber[i]} ${secondNumber[i]}`;
  rightAnswer[i] = gcd(firstNumber[i], secondNumber[i]);
}
export { prefix, task, rightAnswer, numberOfTries };
