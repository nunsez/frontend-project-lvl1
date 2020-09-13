#!/usr/bin/env node
import gameEngine from '../src/index.js';
import * as gcd from '../src/games/brain-gcd.js';

let inGame = true;
let i = 0;

while (inGame && i < gcd.numberOfTries) {
  [inGame, i] = gameEngine(gcd, i);
}
