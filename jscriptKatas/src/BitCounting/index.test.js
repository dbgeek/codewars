import { countBits } from './index';

test("countBits test1", () => {
    expect(countBits(0)).toBe(0)
});
test("countBits test2", () => {
    expect(countBits(4)).toBe(1)
});
test("countBits test3", () => {
    expect(countBits(7)).toBe(3)
});
test("countBits test4", () => {
    expect(countBits(9)).toBe(2)
});
test("countBits test5", () => {
    expect(countBits(10)).toBe(2)
});