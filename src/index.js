import { getInput, print } from './tools.js';

const numberOfTries = 3;

const gameEngine = (rule, gameData) => {
  print('Welcome to the Brain Games!');
  const playerName = getInput('May I have your name?');
  print(`Hello, ${playerName}!`);
  print(rule);

  for (let i = 0; i < numberOfTries; i += 1) {
    const [task, rightAnswer] = gameData();
    print(`Question: ${task}`);
    const playerAnswer = getInput(`Your answer:`);

    if (playerAnswer !== rightAnswer) {
      // prettier-ignore
      print(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      print(`Let's try again, ${playerName}!`);
      return; // Game over
    }

    print('Correct!');
  }

  print(`Congratulations, ${playerName}!`);
};

export default gameEngine;
