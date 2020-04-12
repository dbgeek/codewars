import { findNeedle } from './findNeedle';

test('test1', () => {
    expect(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])).toEqual('found the needle at position 5');
})