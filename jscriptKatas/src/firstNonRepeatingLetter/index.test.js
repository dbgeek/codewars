import firstNonRepeatingLetter from './index';

describe('Sample test for firstNonRepeatingLetter', () => {
  it('Sample test 1', () => {
    expect(firstNonRepeatingLetter('a')).toEqual('a');
  });
  it('Sample test 2', () => {
    expect(firstNonRepeatingLetter('stress')).toEqual('t');
  });
  it('Sample test 3', () => {
    expect(firstNonRepeatingLetter('moonmen')).toEqual('e');
  });
});
