import { createPhoneNumber } from './index';

test("test createPhoneNumber", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890")
});
test("test createPhoneNumber", () => {
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111")
});
test("test createPhoneNumber", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890")
});