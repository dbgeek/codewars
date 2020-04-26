import { persistence } from './index';

test("persistence test1", () => {
    expect(persistence(39)).toEqual(3);
});
test("persistence test2", () => {
    expect(persistence(4)).toEqual(0);
});
test("persistence test3", () => {
    expect(persistence(25)).toEqual(2);
});
test("persistence test4", () => {
    expect(persistence(999)).toEqual(4);
});
