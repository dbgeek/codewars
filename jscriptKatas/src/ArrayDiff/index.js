function arrayDiff(a, b) {
  return a.filter((v) => !b.includes(v));
}

export {
  arrayDiff as default,
};
