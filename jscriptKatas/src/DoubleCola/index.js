function whoIsNext(names, n) {
  let r = n;
  let l = names.length;
  while (r >= l) { r -= l; l *= 2; }
  return names[Math.ceil((names.length * r) / l) - 1];
}

export {
  whoIsNext as default,
};
