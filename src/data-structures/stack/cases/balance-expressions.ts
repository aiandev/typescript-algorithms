import Stack from '../stack';

export const checkIfStrBalance = (str: string, openChar = `(`, closeChar = `)`): boolean => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === openChar) {
      stack.push(openChar);
    }

    if (str.charAt(i) === closeChar) {
      // if the stack is empty and there
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }

  return stack.isEmpty() ? true : false;
};
