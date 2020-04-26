import { toCamelCase } from './index';

test('test1', () => {
    expect(toCamelCase("the-stealth-warrior")).toEqual("theStealthWarrior");
});
test('test2', () => {
    expect(toCamelCase("The_Stealth_Warrior")).toEqual("TheStealthWarrior");
});
test('test3', () => {
    expect(toCamelCase("")).toEqual("");
});
test('test4', () => {
    expect(toCamelCase("A-B-C")).toEqual("ABC");
});
test('test5', () => {
    expect(toCamelCase("The-Stealth-Warrior")).toEqual("TheStealthWarrior");
});
