function moveZeros(array) {
  const arr = array;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < (arr.length - i) - 1; ++j) {
      if (arr[j] === 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function moveZerosClever(array) {
  return array.filter((x) => x !== 0).concat(array.filter((y) => y === 0));
}

export {
  moveZeros,
  moveZerosClever,
};
