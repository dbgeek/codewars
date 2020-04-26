import { duplicateEncode } from './duplicateEncode';


test('test1', () => {
    expect(duplicateEncode('din')).toEqual('(((')
});

test('test2', () => {
    expect(duplicateEncode('recede')).toEqual('()()()')
});

test('test3', () => {
    expect(duplicateEncode('Success')).toEqual(')())())')
});

test('test4', () => {
    expect(duplicateEncode('(( "@')).toEqual('))(((')
});

test('test5', () => {
    expect(duplicateEncode('SSSPSSJSyeI@SSS(SS')).toEqual(')))())()(((()))())')
});