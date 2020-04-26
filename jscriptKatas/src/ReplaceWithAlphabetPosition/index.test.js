import { alphabetPosition } from './index';

test("alphabetPosition test1", () => {
    expect(alphabetPosition("The sunset sets at twelve o' clock.")).toEqual("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
});
test("alphabetPosition test2", () => {
    expect(alphabetPosition("The narwhal bacons at midnight.")).toEqual("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
})
test("alphabetPosition test3", () => {
    expect(alphabetPosition('"2m)}?2#w"')).toEqual('13 23')
})
