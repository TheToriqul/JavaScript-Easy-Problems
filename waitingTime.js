// Easiest way to calculate for me actually
function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTimes) ||
    typeof serialNumber !== "number" ||
    serialNumber <= waitingTimes.length
  ) {
    return "Invalid Input";
  }
  let totalTime = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totalTime += waitingTimes[i];
  }
  let averageWaitingTime = Math.round(totalTime / waitingTimes.length);
  let peopleAhead = serialNumber - waitingTimes.length - 1;
  let totalWaitingTime = averageWaitingTime * peopleAhead;
  return totalWaitingTime;
}

// Another way to calculate
function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTimes) ||
    typeof serialNumber !== "number" ||
    serialNumber <= waitingTimes.length
  ) {
    return "Invalid Input";
  }

  const averageTime = Math.round(
    waitingTimes.reduce((sum, time) => sum + time, 0) / waitingTimes.length
  );
  const remainingPeople = serialNumber - waitingTimes.length - 1;

  return averageTime * remainingPeople;
}

// Test cases
console.log("\nProblem 5: Calculate Waiting Time");
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));

// Additional test cases
console.log(waitingTime([5, 10, 15], 7));
console.log(waitingTime([1, 2, 3, 4, 5], 10));
