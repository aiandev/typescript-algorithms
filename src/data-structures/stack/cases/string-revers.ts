import Stack from '../stack';

export const reversString = (str: string): string => {
  const stack = new Stack();

  for (const char of str) {
    stack.push(char);
  }

  let stringRevered = ``;
  while (!stack.isEmpty()) {
    stringRevered += stack.pop();
  }

  return stringRevered;
};
