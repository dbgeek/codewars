import validatePIN from './index';

describe('Test cases for validateePin', () => {
  it('1234 should retun true', () => {
    expect(validatePIN('1234')).toBeTruthy();
  });
  it('123456 should return true', () => {
    expect(validatePIN('123456')).toBeTruthy();
  });
  it('123456789 should return false', () => {
    expect(validatePIN('123456789')).toBeFalsy();
  });
  it('12a4 should return false', () => {
    expect(validatePIN('12a4')).toBeFalsy();
  });
  it('123a4 should return false', () => {
    expect(validatePIN('123a4')).toBeFalsy();
  });
  it('1234a should return false', () => {
    expect(validatePIN('1234a')).toBeFalsy();
  });
});
