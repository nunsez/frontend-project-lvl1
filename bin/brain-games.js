#!/usr/bin/env node
import getAnswer from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const nameQuestion = 'May I have your name?';
const name = getAnswer(nameQuestion);

console.log(`Hello, ${name}!`);
