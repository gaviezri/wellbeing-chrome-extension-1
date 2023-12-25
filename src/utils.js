export function getEpochTime() {
  return Math.floor(new Date().getTime() / 1000);
}

export const waterIntervalMarks = [
  { value: 15, label: 15 },
  // { value: 30, label: 30 },
  // { value: 45, label: 45 },
  // { value: 60, label: 60 },
  // {value:75,label:75},
  // {value:90,label:90},
  // {value:105,label:105},
  { value: 120, label: 120 },
];

export const strechingIntervalMarks = [
  { value: 0.5, label: 0.5 },
  // {value:1,label:1},
  // {value:1.5,label:1.5},
  // {value:2,label:2},
  // {value:2.5,label:2.5},
  // {value:3,label:3},
  // {value:3.5,label:3.5},
  { value: 4, label: 4 },
];
