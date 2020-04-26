import { disemvowel } from './index';

test('disemvowel test1', () => {
    expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
  });

  test('disemvowel test2', () => {
    expect(disemvowel("This website is for losers \' LOL!")).toBe("Ths wbst s fr lsrs \' LL!");
  });
