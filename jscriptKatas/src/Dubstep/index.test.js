import { songDecoder } from './index';

test("songDecoder test1", () => {
    expect(songDecoder("AWUBBWUBC")).toEqual("A B C");
});
test("songDecoder test2", () => {
    expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).toEqual("A B C");
});
test("songDecoder test3", () => {
    expect(songDecoder("WUBAWUBBWUBCWUB")).toEqual("A B C");
});
