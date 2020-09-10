import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  const result = console.log(`Hello, ${name}!`);

  return result;
};

export default greeting;
