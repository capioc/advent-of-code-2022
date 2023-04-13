import { readFileSync } from 'fs';
import { day4 } from './day4';
import { day5 } from './day5';
import { day6 } from './day6';

const readInput = (dayNumber: number) => {
  try {
    return readFileSync(`./inputs/day${dayNumber}.txt`).toString().trim().split('\n');
  } catch (error) {
    console.error('Error reading input', error);
  }
}

day4(readInput(4));
day5(readInput(5));
day6(readInput(6));
