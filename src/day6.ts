const detectMarker = (signal: string, markerLength: number) => {
  let sequence = '';
  for(let i=0; i<signal.length; i++) {
    if(sequence.length === markerLength) {
      return i;
    }

    const s = sequence.indexOf(signal[i]);
    if(s < 0) {
      sequence += signal[i];
    } else {
      sequence = sequence.substring(s+1) + signal[i];
    }
  }
  return -1;
}

const solveA = (input: any): number => {
  return detectMarker(input[0], 4);
};

const solveB = (input: any): number => {
  return detectMarker(input[0], 14);
};


export const day6 = (input: any): void => {
  console.log('\n-------- DAY 6 ---------');
  console.log('Part A:', solveA(input));
  console.log('Part B:', solveB(input));
};
