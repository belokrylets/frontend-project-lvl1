#!/usr/bin/env node
import { task, even, correct } from '../src/games/brain-even.js';
import startGame from '../src/index.js';

startGame(task, correct, even);
