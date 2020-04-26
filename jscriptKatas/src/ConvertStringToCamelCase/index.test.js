import { toCamelCase } from './index';

test('toCamelCase test1', () => {
    expect(toCamelCase("the-stealth-warrior")).toEqual("theStealthWarrior");
});
test('toCamelCase test2', () => {
    expect(toCamelCase("The_Stealth_Warrior")).toEqual("TheStealthWarrior");
});
test('toCamelCase test3', () => {
    expect(toCamelCase("")).toEqual("");
});
test('toCamelCase test4', () => {
    expect(toCamelCase("A-B-C")).toEqual("ABC");
});
test('toCamelCase test5', () => {
    expect(toCamelCase("The-Stealth-Warrior")).toEqual("TheStealthWarrior");
});
