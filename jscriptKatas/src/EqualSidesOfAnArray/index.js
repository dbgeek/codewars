function findEvenIndex(arr) {
  let r = arr.reduce((p, v) => p + v, 0);
  let l = 0;
  if (r === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    r -= arr[i];
    if (l === r) return i;
    l += arr[i];
  }
  return -1;
}

export {
  findEvenIndex as default,
};
