import { likes } from './index';

test('likes test1', () => {
    expect(likes([])).toEqual("no one likes this");
});

test('likes tes2', () => {
    expect(likes(["Peter"])).toEqual("Peter likes this");
});

test('likes test3', () => {
    expect(likes(["Jacob", "Alex"])).toEqual("Jacob and Alex like this");
});

test('likes test4', () => {
    expect(likes(["Max", "John", "Mark"])).toEqual("Max, John and Mark like this");
});

test('likes test5', () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toEqual("Alex, Jacob and 2 others like this");
});