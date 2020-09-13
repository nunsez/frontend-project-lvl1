#!/usr/bin/env node
import gameEngine from '../src/index.js';
import * as progression from '../src/games/brain-progression.js';

let inGame = true;
let i = 0;

while (inGame && i < progression.numberOfTries) {
  [inGame, i] = gameEngine(progression, i);
}
