import { car, cdr } from '@hexlet/pairs';
import getAnswer from './cli.js';

const numberOfTries = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = getAnswer('May I have your name?');
  console.log(`Hello, ${playerName}!`);

  return playerName;
};

const gameEngine = (rule, gameData) => {
  const playerName = greeting();
  console.log(rule);

  for (let i = 0; i < numberOfTries; i += 1) {
    const currentTask = car(gameData)[i];
    console.log(`Question: ${currentTask}`);

    const playerAnswer = getAnswer(`Your answer:`);
    const rightAnswer = cdr(gameData)[i].toString();

    if (playerAnswer !== rightAnswer) {
      // prettier-ignore
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return; // Game over
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export { gameEngine as default, numberOfTries };
