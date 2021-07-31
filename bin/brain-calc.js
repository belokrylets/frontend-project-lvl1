#!/usr/bin/env node
import { task, calc, correct } from '../src/games/brain-calc.js';
import startGame from '../src/index.js';

startGame(task, correct, calc);
