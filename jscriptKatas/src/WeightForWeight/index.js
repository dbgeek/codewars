function orderWeight(string) {
  const weights = string.split(' ');

  return weights
    .sort((a, b) => {
      return weight(a, b) ? -1 : 1;
    })
    .join(' ');
}

function getWeight(weight) {
  return weight.split('').reduce((sum, curVal) => sum + parseInt(curVal), 0);
}

function weight(a, b) {
  return getWeight(a) === getWeight(b) ? a < b : getWeight(a) < getWeight(b);
}

export { orderWeight, getWeight, weight };
