function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  return /\d/.test(name);
}

// Test cases
console.log("\nProblem 3: Check Digits in Name");
console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));

// Additional test cases
console.log(checkDigitsInName("John Doe 3rd"));
console.log(checkDigitsInName(""));