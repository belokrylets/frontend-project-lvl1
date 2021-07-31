#!/usr/bin/env node
import { task, gcd, correct } from '../src/games/brain-gcd.js';
import startGame from '../src/index.js';

startGame(task, correct, gcd);
