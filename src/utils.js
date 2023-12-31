export function getEpochTimeInSeconds() {
  return Math.floor(new Date().getTime() / 1000);
}

export const waterIntervalMarks = [
  { value: 15, label: 15 },
  { value: 30, label: undefined },
  { value: 45, label: undefined },
  { value: 60, label: undefined },
  { value: 75, label: undefined },
  { value: 90, label: undefined },
  { value: 105, label: undefined },
  { value: 120, label: 120 },
];

export const strechingIntervalMarks = [
  { value: 0.5, label: 0.5 },
  { value: 1, label: undefined },
  { value: 1.5, label: undefined },
  { value: 2, label: undefined },
  { value: 2.5, label: undefined },
  { value: 3, label: undefined },
  { value: 3.5, label: undefined },
  { value: 4, label: 4 },
];

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
