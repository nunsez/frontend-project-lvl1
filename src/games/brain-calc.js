import _ from 'lodash';

const numberOfTries = 3;
const prefix = 'What is the result of the expression?';

const operations = ['+', '-', '*'];
const firstNumber = [];
const secondNumber = [];
const operationIndex = [];
const task = [];
const rightAnswer = [];

for (let i = 0; i < 3; i += 1) {
  firstNumber[i] = _.random(1, 49);
  secondNumber[i] = _.random(1, 49);
  operationIndex[i] = _.random(0, 2);
  // prettier-ignore
  task[i] = `${firstNumber[i]} ${operations[operationIndex[i]]} ${secondNumber[i]}`;

  switch (operationIndex[i]) {
    case 0:
      rightAnswer[i] = firstNumber[i] + secondNumber[i];
      break;
    case 1:
      rightAnswer[i] = firstNumber[i] - secondNumber[i];
      break;
    case 2:
      rightAnswer[i] = firstNumber[i] * secondNumber[i];
      break;
    default:
      break;
  }
}
export { prefix, task, rightAnswer, numberOfTries };
