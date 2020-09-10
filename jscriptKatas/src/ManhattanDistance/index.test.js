import manhattanDistance from './index';

describe('Test cases for manhattanDistance', () => {
  it('Testing manhattanDistance', () => {
    expect(manhattanDistance([1, 1], [1, 1])).toEqual(0);
    expect(manhattanDistance([5, 4], [3, 2])).toEqual(4);
    expect(manhattanDistance([1, 1], [0, 3])).toEqual(3);
  });
});
