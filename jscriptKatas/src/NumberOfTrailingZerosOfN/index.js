function zeros(n) {
  let count = 0;
  let i = 5;
  while (n / i >= 1) {
    count += Math.floor(n / i);
    i *= 5;
  }
  return count;
}

export {
  zeros as default,
};
