function calculateFinalScore(obj) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return "Invalid Input";
  }

  const { testScore, schoolGrade, isFFamily } = obj;

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
