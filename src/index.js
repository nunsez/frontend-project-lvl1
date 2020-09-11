import getAnswer from './cli.js';
import greeting from './games/brain-games.js';
import * as even from './games/brain-even.js';
import * as calc from './games/brain-calc.js';

const playerName = greeting();
let gameMode;

const gameEngine = (incomingGame) => {
  switch (incomingGame) {
    case 'calc':
      gameMode = calc;
      break;
    case 'even':
      gameMode = even;
      break;
    default:
      break;
  }

  console.log(gameMode.prefix); // ! depends on game mode
  let rightAnswersCount = 0;

  do {
    const i = rightAnswersCount;
    const currentTask = gameMode.task[i]; // ! depends on game mode
    console.log(`Question: ${currentTask}`);

    const playerAnswer = getAnswer(`Your answer:`);
    const rightAnswer = gameMode.rightAnswer[i].toString(); // ! depends on game mode

    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
      rightAnswersCount += 1;
    } else {
      // prettier-ignore
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  } while (rightAnswersCount < 3);

  if (rightAnswersCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export { gameEngine as default };
