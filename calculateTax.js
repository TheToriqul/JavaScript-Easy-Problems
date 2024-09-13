function calculateTax(income, expenses) {
  if (
    typeof income !== "number" ||
    typeof expenses !== "number" ||
    income < 0 ||
    expenses < 0 ||
    income < expenses
  ) {
    return "Invalid Input";
  }
  const taxableAmount = income - expenses;
  const tax = taxableAmount * 0.2;
  return tax;
}

// Test cases
console.log("Problem 1: Calculate Tax");
console.log(calculateTax(10000, 3000)); // Expected: 1400
console.log(calculateTax(34000, 1753)); // Expected: 6449.4
console.log(calculateTax(5000, 1500)); // Expected: 700
console.log(calculateTax(7000, 7000)); // Expected: 0
console.log(calculateTax(-5000, 2000)); // Expected: Invalid Input
console.log(calculateTax(6000, -1500)); // Expected: Invalid Input

// Additional test case
console.log(calculateTax(20000, 5000)); // Expected: 3000
