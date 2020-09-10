import validParentheses from './index';

describe('', () => {
  it('', () => {
    expect(validParentheses('()')).toBeTruthy();
    expect(validParentheses(')(()))')).toBeFalsy();
    expect(validParentheses('(')).toBeFalsy();
    expect(validParentheses('(())((()())())')).toBeTruthy();
    expect(validParentheses('')).toBeTruthy();
  });
});
