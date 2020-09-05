/**
 * unique_in_order takes as argument a sequence and returns a list of items without any elements
 * with the same value next to each other and preserving the original order of elements.
 */
function uniqueInOrder(iterable) {
  return [...iterable].filter((v, idx, array) => v !== array[idx - 1]);
}

export {
  uniqueInOrder as default,
};
