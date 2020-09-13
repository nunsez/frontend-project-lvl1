#!/usr/bin/env node
import gameEngine from '../src/index.js';
import * as even from '../src/games/brain-even.js';

let inGame = true;
let i = 0;

while (inGame && i < even.numberOfTries) {
  [inGame, i] = gameEngine(even, i);
}
