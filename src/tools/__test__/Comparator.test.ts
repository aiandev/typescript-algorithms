import Comparator from '../Comparator';

describe(`Comparator`, () => {
  it(`should compare with default comparator function`, () => {
    const comparator = new Comparator();

    expect(comparator.equal(0, 0)).toBeTruthy();
    expect(comparator.equal(0, 1)).toBeFalsy();
    expect(comparator.lessThan(1, 2)).toBeTruthy();
    expect(comparator.lessThan(-1, 2)).toBeTruthy();
    expect(comparator.lessThan(10, 2)).toBeFalsy();
    expect(comparator.lessThanOrEqual(10, 2)).toBeFalsy();
    expect(comparator.lessThanOrEqual(1, 1)).toBeTruthy();
    expect(comparator.lessThanOrEqual(0, 0)).toBeTruthy();
    expect(comparator.greaterThan(0, 0)).toBeFalsy();
    expect(comparator.greaterThan(5, 0)).toBeTruthy();
    expect(comparator.greaterThanOrEqual(5, 0)).toBeTruthy();
    expect(comparator.greaterThanOrEqual(2, 2)).toBeTruthy();
    expect(comparator.greaterThanOrEqual(2, 10)).toBeFalsy();
  });
});
