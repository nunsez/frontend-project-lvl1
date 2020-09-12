#!/usr/bin/env node
import gameEngine from '../src/index.js';
import * as calc from '../src/games/brain-calc.js';

let inGame = true;
let i = 0;

while (inGame && i < calc.numberOfTries) {
  [inGame, i] = gameEngine(calc, true, i);
}
