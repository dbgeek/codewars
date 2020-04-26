import { disemvowel } from './index';

test('test1', () => {
    expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
  });

  test('test2', () => {
    expect(disemvowel("This website is for losers \' LOL!")).toBe("Ths wbst s fr lsrs \' LL!");
  });
