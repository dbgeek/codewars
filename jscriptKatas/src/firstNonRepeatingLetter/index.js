function firstNonRepeatingLetter(s) {
  return s.split('').find((v) => s.match(new RegExp(v, 'gi')).length === 1) || '';
}

export {
  firstNonRepeatingLetter as default,
};
