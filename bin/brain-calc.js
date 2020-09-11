#!/usr/bin/env node
import gameEngine from '../src/index.js';
import * as calc from '../src/games/brain-calc.js';

let inGame = true;
let i = 0;

while (inGame && i < 3) {
  [inGame, i] = gameEngine(calc, true, i);
}
