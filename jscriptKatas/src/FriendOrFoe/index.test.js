import friend from './index';

describe('', () => {
  it('', () => {
    expect(friend(['Ryan', 'Kieran', 'Mark'])).toEqual(['Ryan', 'Mark']);
    expect(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])).toEqual(['Ryan']);
    expect(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])).toEqual(['Jimm', 'Cari', 'aret']);
    expect(friend(['Love', 'Your', 'Face', '1'])).toEqual(['Love', 'Your', 'Face']);
  });
});
