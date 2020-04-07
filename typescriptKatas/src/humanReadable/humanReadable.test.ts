import { humanReadable } from "./humanReadable"

test('test1', () => {
    expect(humanReadable(5)).toEqual('00:00:05');
})

test('test2', () => {
    expect(humanReadable(0)).toEqual('00:00:00');
})

test('test3', () => {
    expect(humanReadable(60)).toEqual('00:01:00');
})

test('test4', () => {
    expect(humanReadable(86399)).toEqual('23:59:59');
})

test('test5', () => {
    expect(humanReadable(359999)).toEqual('99:59:59');
})
