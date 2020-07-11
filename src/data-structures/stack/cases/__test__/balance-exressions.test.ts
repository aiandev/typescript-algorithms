import { checkIfStrBalance } from '../balance-expressions';

describe(`Checking if the string isBalance or not`, () => {
  it(`Check if the string is Balance`, () => {
    expect(checkIfStrBalance(`((Aian))`)).toBeTruthy();
  });

  it(`Check if the sting is not Balance`, () => {
    expect(checkIfStrBalance(`((Aian())`)).toBeFalsy();
  });
});
