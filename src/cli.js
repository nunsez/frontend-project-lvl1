import readlineSync from 'readline-sync';

const getAnswer = (question) => {
  const answer = readlineSync.question(`${question} `);

  return answer;
};

export default getAnswer;
