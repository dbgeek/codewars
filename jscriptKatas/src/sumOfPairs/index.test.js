import { sum_pairs } from './index';

test('sum_pairs test1', () => {
    expect(sum_pairs([11, 3, 7, 5],10)).toStrictEqual([3, 7]);
});
test('sum_pairs test2', () => {
    expect(sum_pairs([4, 3, 2, 3, 4],6)).toStrictEqual([4, 2]);
});
test('sum_pairs test3', () => {
    expect(sum_pairs([10, 5, 2, 3, 7, 5],10)).toStrictEqual([3, 7]);
});