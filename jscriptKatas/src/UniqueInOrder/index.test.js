import uniqueInOrder from './index';

describe('Test cases for uniqueInOrder', () => {
  it('AAAABBBCCDAABBB should return [A, B, C, D, A, B]', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
  });
  it('ABBCcAD should return [A, B, C, c, A, D]', () => {
    expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
  });
  it('[1, 2, 2, 3, 3] should return [1, 2, 3]', () => {
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
