import { descendingOrder } from './index';

test('test1', () => {
    expect(descendingOrder(0)).toBe(0);
  });

  test('test2', () => {
    expect(descendingOrder(1)).toBe(1);
  });

  test('test3', () => {
    expect(descendingOrder(123456789)).toBe(987654321);
  });

  test('test4', () => {
    expect(descendingOrder(145263)).toBe(654321);
  });
