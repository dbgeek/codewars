import { Challenge } from './getMiddle';

test('test1', () => {
    expect(Challenge.getMiddle('test')).toEqual('es');
})
test('test2', () => {
    expect(Challenge.getMiddle('testing')).toEqual('t');
})