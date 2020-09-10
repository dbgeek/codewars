import zeros from './index';

describe('', () => {
  it('', () => {
    expect(zeros(0)).toEqual(0);
    expect(zeros(5)).toEqual(1);
    expect(zeros(6)).toEqual(1);
    expect(zeros(9)).toEqual(1);
    expect(zeros(10)).toEqual(2);
    expect(zeros(20)).toEqual(4);
    expect(zeros(30)).toEqual(7);
    expect(zeros(100)).toEqual(24);
    expect(zeros(100000)).toEqual(24999);
    expect(zeros(1000000000)).toEqual(249999998);
  });
});
