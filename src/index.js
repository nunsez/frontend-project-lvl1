import getAnswer from './cli.js';
import greeting from './games/brain-games.js';

const playerName = greeting();

const gameEngine = (gameMode, status, i) => {
  if (i === 0) {
    console.log(gameMode.prefix);
  }

  const currentTask = gameMode.task[i];
  console.log(`Question: ${currentTask}`);

  const playerAnswer = getAnswer(`Your answer:`);
  const rightAnswer = gameMode.rightAnswer[i].toString();

  if (playerAnswer !== rightAnswer) {
    // prettier-ignore
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
    console.log(`Let's try again, ${playerName}!`);
    return [false, i];
  }

  console.log('Correct!');

  if (i === 2) {
    console.log(`Congratulations, ${playerName}!`);
  }
  return [true, i + 1];
};

export { gameEngine as default };
