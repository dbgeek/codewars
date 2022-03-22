function snail(array) {
  const result = [];
  while (array.length) {
    result.push(...array.shift());
    array.map((row) => result.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return result;
}

function snail2(array) {
  const result = [];
  while (array.length) {
    result.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }
    result.push(...(array.pop() || []).reverse());
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
}

export { snail, snail2 };
