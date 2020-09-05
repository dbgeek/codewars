import arrayDiff from './index';

describe('Sample tests for arrayDiff', () => {
  it('Sample tests 1', () => {
    expect(arrayDiff([], [4, 5])).toEqual([]);
  });
  it('Sample tests 2', () => {
    expect(arrayDiff([3, 4], [3])).toEqual([4]);
  });
  it('Sample tests 3', () => {
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
  });
});
