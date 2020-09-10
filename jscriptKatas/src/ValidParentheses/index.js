function validParentheses(parens) {
  let c = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      c += 1;
    } else {
      c -= 1;
    }
    if (c < 0) return false;
  }
  return c === 0;
}

export {
  validParentheses as default,
};
