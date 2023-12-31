export function getEpochTimeInSeconds() {
  return Math.floor(new Date().getTime() / 1000);
}

export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function convertValueToSeconds(value, hrs) {
  const hourFactor = 3600;
  const minuteFactor = 60;
  const conversionFactor = hrs ? hourFactor : minuteFactor;
  return value * conversionFactor;
}

export function calculateRemainingTimeBasedOnIntervalAndStartTime(startTimeInSeconds, intervalLength, hrs) {
  const time = (getEpochTimeInSeconds() - startTimeInSeconds) % convertValueToSeconds(intervalLength, hrs);
  console.log(time);
  return time;
}

export function getRandInt(minimum = 0, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
