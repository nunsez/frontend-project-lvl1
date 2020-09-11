import _ from 'lodash';

// * operations = ['+', '-', '*'];
const prefix = 'What is the result of the expression?';

const firstNumber = [];
const secondNumber = [];
const currentOperationIndex = [];
const task = [];
const rightAnswer = [];

for (let i = 0; i < 3; i += 1) {
  firstNumber[i] = _.random(1, 49);
  secondNumber[i] = _.random(1, 49);
  currentOperationIndex[i] = _.random(0, 2);

  switch (currentOperationIndex[i]) {
    case 0:
      task[i] = `${firstNumber[i]} + ${secondNumber[i]}`;
      rightAnswer[i] = firstNumber[i] + secondNumber[i];
      break;
    case 1:
      task[i] =
        firstNumber[i] > secondNumber[i]
          ? `${firstNumber[i]} - ${secondNumber[i]}`
          : `${secondNumber[i]} - ${firstNumber[i]}`;
      rightAnswer[i] = Math.abs(firstNumber[i] - secondNumber[i]);
      break;
    case 2:
      task[i] = `${firstNumber[i]} * ${secondNumber[i]}`;
      rightAnswer[i] = firstNumber[i] * secondNumber[i];
      break;
    default:
      break;
  }
}
export { prefix, task, rightAnswer };
