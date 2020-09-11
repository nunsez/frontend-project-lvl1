import getAnswer from './cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = getAnswer('May I have your name?');
  console.log(`Hello, ${playerName}!`);

  return playerName;
};

export default greeting;
