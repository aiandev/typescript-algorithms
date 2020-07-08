import  reversString  from "../string-revers";

describe('Checking if the string isBalance or not', () => {
  
  it('Check if the string is Balance', () => {
    expect(reversString('AIAN')).toBe('NAIA');
  });

});