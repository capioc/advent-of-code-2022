const processInput = (input: string[]) => {
  const arr = input.map((pair) => {
    const sectionRanges = pair.split(',');
    return sectionRanges.map((range) => {
      const r = range.split('-');
      return [+r[0],+r[1]];
    });
  });
  return arr;
};

const solveA = (input:any): number => {
  let fullyContained = 0;
  for (const pair of input) {
    if (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) {
      fullyContained++;
    } else if (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) {
      fullyContained++;
    }
  }
  return fullyContained;
};

const solveB = (input: any): number => {
  let overlapping = 0;
  for (const pair of input) {
    if (pair[0][0] >= pair[1][0] && pair[0][0] <= pair[1][1]) {
      overlapping++;
    } else if (pair[0][1] >= pair[1][0] && pair[0][1] <= pair[1][1]) {
      overlapping++;
    } else if (pair[1][0] >= pair[0][0] && pair[1][0] <= pair[0][1]) {
      overlapping++;
    } else if (pair[1][1] >= pair[0][0] && pair[1][1] <= pair[0][1]) {
      overlapping++;
    }
  }
  return overlapping;
}
export const day4 = (input: any): void => {
  const processedInput = processInput(input);
  console.log('\n-------- DAY 4 ---------')
  console.log('Part A:', solveA(processedInput));
  console.log('Part B:', solveB(processedInput));
};
