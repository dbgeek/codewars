import { number } from './NumberofPeopleintheBus'

test('test1', () => {
    expect(number([[10,0],[3,5],[5,8]])).toEqual(5);
})
test('test2', () => {
    expect(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toEqual(17);
})
test('test3', () => {
    expect(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toEqual(21);
})
test('test4', () => {
    expect(number([[0,0]])).toEqual(0);
})
