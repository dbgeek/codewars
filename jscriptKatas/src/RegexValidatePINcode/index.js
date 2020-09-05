function validatePIN(pin) {
  const validateRegexp = /^([0-9]{4}|[0-9]{6})$/g;
  return validateRegexp.test(pin);
}

export {
  validatePIN as default,
};
