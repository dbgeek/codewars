import { isIsogram } from './isIsogram'
import { equal } from 'assert'

test('test1', () => {
    expect(isIsogram("Dermatoglyphics")).toBeTruthy();
})
test('test2', () => {
    expect(isIsogram("isogram")).toBeTruthy();
})
test('test3', () => {
    expect(isIsogram("aba")).toBeFalsy();
})
test('test4', () => {
    expect(isIsogram("moOse")).toBeFalsy();
})
test('test5', () => {
    expect(isIsogram("isIsogram")).toBeFalsy();
})
test('test6', () => {
    expect(isIsogram("")).toBeTruthy();
})
