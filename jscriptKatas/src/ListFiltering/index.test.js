import { filter_list } from './index';

test('test1', () => {
    expect(filter_list([1, 2, 'a', 'b'])).toStrictEqual([1, 2]);
});

test('test2', () => {
    expect(filter_list([1, 'a', 'b', 0, 15])).toStrictEqual([1, 0, 15]);
});

test('test3', () => {
    expect(filter_list([1, 2, 'aasf', '1', '123', 123])).toStrictEqual([1, 2, 123]);
});
