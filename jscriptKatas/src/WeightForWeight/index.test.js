import { getWeight, orderWeight, weight } from './index.js';

describe('Weight for weight tests', () => {
  test('Example test 1', () => {
    expect(orderWeight('56 65 74 100 99 68 86 180 90')).toBe(
      '100 180 90 56 65 74 68 86 99',
    );
  });
  test('Example test 2', () => {
    expect(orderWeight('')).toBe('');
  });
  test('getWeight test', () => {
    expect(getWeight('99')).toBe(18);
    expect(getWeight('100')).toBe(1);
    expect(getWeight('86')).toBe(14);
  });
  test('test weight', () => {
    expect(weight('100', '180')).toBeTruthy();
    expect(weight('180', '100')).toBeFalsy();
    expect(weight('56', '65')).toBeTruthy();
    expect(weight('65', '56')).toBeFalsy();
  });
});
