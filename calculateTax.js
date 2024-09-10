function calculateTax(income, expenses) {
  if (typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }

  const taxableAmount = income - expenses;
  const tax = taxableAmount * 0.2;
  return tax;
}
