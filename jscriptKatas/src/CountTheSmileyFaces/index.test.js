import { countSmileys } from './index';

test('test1', () => {
    expect(countSmileys([])).toStrictEqual(0);
});
test('test2', () => {
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toEqual(4);
});
test('test3', () => {
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toStrictEqual(2);
});
test('test4', () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toStrictEqual(1);
});
