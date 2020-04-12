import { findOdd } from './findOdd';

test('test1', () => {
    expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).toEqual(5) //
});

test('test2', () => {
    expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toEqual(-1)
})
test('test3', () => {
    expect(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).toEqual(5)
})
test('test4', () => {
    expect(findOdd([10])).toEqual(10)
})
test('test5', () => {
    expect(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toEqual(10)
})
test('test6', () => {
    expect(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toEqual(1)
});