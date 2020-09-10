import whoIsNext from './index';

describe('Test cases for whoIsNext', () => {
  it('Test who Is next', () => {
    expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 52)).toEqual('Penny');
    expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 7230702951)).toEqual('Leonard');
    expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 1)).toEqual('Sheldon');
    expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 1000000000)).toEqual('Penny');
    expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 28643950)).toEqual('Leonard');
    expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 38614)).toEqual('Howard');
    expect(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 63)).toEqual('Rajesh');
  });
});
