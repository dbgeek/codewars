import { findSmallestInt } from './findSmallestInt'

test('test1', () => {
    expect(findSmallestInt([78,56,232,12,8])).toEqual(8);
})
test('test2', () => {
    expect(findSmallestInt([78,56,232,12,18])).toEqual(12);
})
test('test3', () => {
    expect(findSmallestInt([78,56,232,412,228])).toEqual(56);
})
test('test4', () => {
    expect(findSmallestInt([78,56,232,12,0])).toEqual(0);
})
test('test5', () => {
    expect(findSmallestInt([1,56,232,12,8])).toEqual(1);
})

