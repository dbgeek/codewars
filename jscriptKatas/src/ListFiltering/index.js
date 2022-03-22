function filter_list(l) {
  return l.filter( (item) => typeof item == "number" && item >= 0);
}
export {filter_list};
