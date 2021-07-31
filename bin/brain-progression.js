#!/usr/bin/env node
import { task, progression, correct } from '../src/games/brain-progression.js';
import startGame from '../src/index.js';

startGame(task, correct, progression);