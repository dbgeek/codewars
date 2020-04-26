import { countSmileys } from './index';

test('countSmileys test1', () => {
    expect(countSmileys([])).toStrictEqual(0);
});
test('countSmileys test2', () => {
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toEqual(4);
});
test('countSmileys test3', () => {
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toStrictEqual(2);
});
test('countSmileys test4', () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toStrictEqual(1);
});
