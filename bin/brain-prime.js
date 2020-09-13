#!/usr/bin/env node
import gameEngine from '../src/index.js';
import * as prime from '../src/games/brain-prime.js';

let inGame = true;
let i = 0;

while (inGame && i < prime.numberOfTries) {
  [inGame, i] = gameEngine(prime, i);
}
