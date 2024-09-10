function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return "Invalid Input";
  }

  return /\d/.test(name);
}
