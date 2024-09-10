function calculateFinalScore(obj) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)){
    return "Invalid Input";
  }
  const {testScore, schoolGrade, isFFamily} = obj;

  if (typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
    return "Invalid Input";
  }
  if (testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore += 20;
  }
  return finalScore >= 80;
}

// Test cases
console.log("\nProblem 4: Calculate Final Score");
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));

// Additional test cases
console.log(calculateFinalScore({ name: "John", testScore: 50, schoolGrade: 30, isFFamily: false }));
console.log(calculateFinalScore({ name: "Jane", testScore: 40, schoolGrade: 20, isFFamily: true }));
console.log(calculateFinalScore({ name: "Bob", testScore: 30, schoolGrade: 15, isFFamily: false }));