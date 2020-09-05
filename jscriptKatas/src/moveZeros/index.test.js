import { moveZeros, moveZerosClever } from './index';

describe('Test cases for moveZeros', () => {
  it('test', () => {
    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toEqual([false, 1, 1, 2, 1, 3, 'a', 0, 0]);
  });
  it('test', () => {
    expect(moveZerosClever([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toEqual([false, 1, 1, 2, 1, 3, 'a', 0, 0]);
  });
});
