const STACK_HEIGHT = 8;

const transformToStacks = (input: string[]) => {
  const stacks: any[] = [];
  const rows: any[] = [];
  for (let i = 0; i < STACK_HEIGHT; i++) {
    rows.push(input[i]);
  }
  const stacksHeader = input[STACK_HEIGHT];
  for (let i = 0; i < stacksHeader.length; i++) {
    if (Number(stacksHeader[i]) > 0) {
      stacks.push(
        rows
          .map((row) => {
            return row[i] ? row[i] : '';
          })
          .reverse()
          .filter((crate) => {
            return crate && crate != ' ';
          })
      );
    }
  }

  return stacks;
};

const transformToSteps = (input: string[]) => {
  const rearrangements = input.slice(STACK_HEIGHT + 2);
  const steps = rearrangements.map((r) => {
    const substr = r.split(/(\d+)/);
    return {
      move: +substr[1],
      from: +substr[3] - 1,
      to: +substr[5] - 1
    };
  });
  return steps;
};

const processInput = (input: string[]) => {
  const stacks = transformToStacks(input);
  const steps = transformToSteps(input);
  return { stacks, steps };
};

const solveA = (input: any): string => {
  const { stacks, steps } = processInput(input);
  for (const step of steps) {
    for (let i = 0; i < step.move; i++) {
      stacks[step.to].push(stacks[step.from].pop());
    }
  }
  return stacks.reduce((message, stack) => message + stack.pop());
};

const solveB = (input: any): string => {
  const { stacks, steps } = processInput(input);
  for (const step of steps) {
    stacks[step.to].push(...stacks[step.from].splice(-step.move));
  }
  return stacks.reduce((message, stack) => message + stack.pop());
};

export const day5 = (input: any): void => {
  console.log('\n-------- DAY 5 ---------');
  console.log('Part A:', solveA(input));
  console.log('Part B:', solveB(input));
};
