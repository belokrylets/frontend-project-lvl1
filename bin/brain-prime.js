#!/usr/bin/env node
import { task, prime, correct } from '../src/games/brain-prime.js';
import startGame from '../src/index.js';

startGame(task, correct, prime);
