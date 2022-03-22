import { snail, snail2 } from './index.js';

describe('snail sort 3d array', () => {
  test('example 1', () => {
    expect(
      snail([
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('example 2', () => {
    expect(
      snail([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  test('example 3', () => {
    expect(
      snail([
        [1, 2, 3, 4, 5, 6],
        [20, 21, 22, 23, 24, 7],
        [19, 32, 33, 34, 25, 8],
        [18, 31, 36, 35, 26, 9],
        [17, 30, 29, 28, 27, 10],
        [16, 15, 14, 13, 12, 11],
      ]),
    ).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
    ]);
  });
});
describe('snail2 sort 3d array', () => {
  test('snail2 example 1', () => {
    expect(
      snail2([
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('snail2 example 2', () => {
    expect(
      snail2([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  test('snail2 example 3', () => {
    expect(
      snail2([
        [1, 2, 3, 4, 5, 6],
        [20, 21, 22, 23, 24, 7],
        [19, 32, 33, 34, 25, 8],
        [18, 31, 36, 35, 26, 9],
        [17, 30, 29, 28, 27, 10],
        [16, 15, 14, 13, 12, 11],
      ]),
    ).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
    ]);
  });
});
