#!/usr/bin/env node
import _ from 'lodash';
import getAnswer from '../src/cli.js';
// ! на строчку import playerName from './brain-games.js'; линтер ругается...
import * as bg from './brain-games.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let rightAnswersCount = 0;

do {
  const currentNumber = _.random(1, 99);
  console.log(`Question: ${currentNumber}`);
  const playerAnswer = getAnswer(`Your answer: `);
  const rightAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';

  if (playerAnswer === rightAnswer) {
    console.log('Correct!');
    rightAnswersCount += 1;
  } else {
    console.log(
      `"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"
Let's try again, ${bg.default}!`
    );
    break;
  }
} while (rightAnswersCount < 3);

if (rightAnswersCount === 3) {
  console.log(`Congratulations, ${bg.default}!`);
}
