import { findOutlier } from './findOutlier';

test('test1', () => {
    expect(findOutlier([0, 1, 2])).toEqual(1);
});

test('test2', () => {
    expect(findOutlier([1, 2, 3])).toEqual(2);
});

test('test3', () => {
    expect(findOutlier([2, 6, 8, 10, 3])).toEqual(3);
});

test('test4', () => {
    expect(findOutlier([0, 0, 3, 0, 0])).toEqual(3);
});

test('test5', () => {
    expect(findOutlier([1, 1, 0, 1, 1])).toEqual(0);
});

test('test6', () => {
    expect(findOutlier([-129756503,93330294,108101861,-56095927,-84191187,108664077,-100883593,-155126863,186460059,-9040661,-35164885,166480875,-84741221,43984521,8516375,11354763])).toEqual(93330294);
})