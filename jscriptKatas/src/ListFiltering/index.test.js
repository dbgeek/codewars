import { filter_list } from './index';

test('filter_list test1', () => {
    expect(filter_list([1, 2, 'a', 'b'])).toStrictEqual([1, 2]);
});

test('filter_list test2', () => {
    expect(filter_list([1, 'a', 'b', 0, 15])).toStrictEqual([1, 0, 15]);
});

test('filter_list test3', () => {
    expect(filter_list([1, 2, 'aasf', '1', '123', 123])).toStrictEqual([1, 2, 123]);
});
