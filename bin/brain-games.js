#!/usr/bin/env node
import getAnswer from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const nameQuestion = 'May I have your name?';
const playerName = getAnswer(nameQuestion);

console.log(`Hello, ${playerName}!`);

export default playerName;
