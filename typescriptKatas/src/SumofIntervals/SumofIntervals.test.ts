import { mergInterval, overlap, sumOfIntervals, reduceOverlap } from './SumofIntervals'

test('test1', () => {
    expect(sumOfIntervals([[1, 5]])).toEqual(4);
})
test('test2', () => {
    expect(sumOfIntervals([[1, 5], [6, 10]])).toEqual(8);
})
test('test3', () => {
    expect(sumOfIntervals([[1, 5], [1, 5]])).toEqual(4);
})
test('test4', () => {
    expect(sumOfIntervals([[1, 4], [7, 10], [3, 5]])).toEqual(7);
})

test('test4', () => {
    expect(sumOfIntervals([[61, 167],
    [91, 453],
    [159, 185],
    [55, 396],
    [198, 349],
    [-385, -136],
    [359, 467],
    [-218, -73],
    [-238, -24],
    [202, 488],
    [-75, 304],
    [37, 422]])).toEqual(873);
})
test('test5', () => {
    expect(sumOfIntervals(
        [
            [-385, -136],
            [-238, -24],
            [-218, -73],
            [-75, 304],
            [37, 422],
            [55, 396],
            [61, 167],
            [91, 453],
            [159, 185],
            [198, 349],
            [202, 488],
            [359, 467]
        ])).toEqual(873);
})
//[-385, 488]
//[37,488], [-385,304]

test('overlap true test1', () => {
    expect(overlap(1, 4, 3, 5)).toBeTruthy();
})
test('overlap true test2', () => {
    expect(overlap(4, 6, 3, 5)).toBeTruthy();
})

test('overlap false test1', () => {
    expect(overlap(1, 5, 7, 9)).toBeFalsy();
})
test('overlap true test3', () => {
    expect(overlap(1, 5, 5, 9)).toBeTruthy();
})

test('mergInterval test 1', () => {
    const a = [1, 4]
    const b = [3, 5]
    expect(mergInterval(a[0], b[0], a[1], b[1])).toEqual([1, 5])
})

test('mergInterval test 2', () => {
    const a = [-1, 7]
    const b = [3, 10]
    expect(mergInterval(a[0], b[0], a[1], b[1])).toEqual([-1, 10])
})

test('reduceOverlap test1', () => {
    expect(reduceOverlap([[1, 4], [7, 9], [8, 15]])).toEqual([[1, 4], [7, 15]])
})