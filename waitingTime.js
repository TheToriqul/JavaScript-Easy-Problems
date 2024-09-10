// Easiest way to calculate for me actually
function  waitingTime(waitingTimes  , serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length) {
    return "Invalid Input";
  }
  let totalTime = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totalTime += waitingTimes[i];
  }
  let averageWaitingTime = Math.round(totalTime / waitingTimes.length);
  let peopleAhead = serialNumber - waitingTimes.length -1;
  let totalWaitingTime = averageWaitingTime * peopleAhead;
  return totalWaitingTime;
}

// Another way to calculate
function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length) {
    return "Invalid Input";
  }

  const averageTime = Math.round(waitingTimes.reduce((sum, time) => sum + time, 0) / waitingTimes.length);
  const remainingPeople = serialNumber - waitingTimes.length - 1;
  
  return averageTime * remainingPeople;
}

