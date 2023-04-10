import { day4 } from './day4';
import { readFileSync } from 'fs';

const readInput = (dayNumber: number) => {
  try {
    return readFileSync(`./inputs/day${dayNumber}.txt`).toString().trim().split('\n');
  } catch (error) {
    console.error('Error reading input', error);
  }
}

const executeDay = (day: number) => {
  const input = readInput(day);
  const result = day4(input);
  return result;
}

console.log('hello', executeDay(4));
