// calculateTax.js

function calculateTax(income, expenses) {
  if (typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }

  const taxableAmount = income - expenses;
  const tax = taxableAmount * 0.2;
  return tax;
}

// Test cases
console.log("Problem 1: Calculate Tax");
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500)); 

// Additional test case
console.log(calculateTax(20000, 5000));