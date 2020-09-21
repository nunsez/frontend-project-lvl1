import _ from 'lodash';
import readlineSync from 'readline-sync';

const getInput = (question) => readlineSync.question(`${question} `);

const print = (output) => console.log(output);

const rng = (min, max) => _.random(min, max);

const isEven = (num) => num % 2 === 0;

const isPrime = (num) => {
  const maxValue = Math.sqrt(num);

  for (let i = 2; i <= maxValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

// prettier-ignore
export {
  getInput, print, rng, isEven, isPrime, gcd, calculate, makeProgression,
};
