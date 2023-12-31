class TimerConfig {
  constructor(marks, initInterval, min, max, step, valueLabelFormat) {
    this.marks = marks;
    this.initInterval = initInterval;
    this.min = min;
    this.max = max;
    this.step = step;
    this.valueLabelFormat = valueLabelFormat;
  }
}

export const strechConfig = new TimerConfig(
  [
    { value: 0.5, label: "0.5h" },
    { value: 1, label: undefined },
    { value: 1.5, label: undefined },
    { value: 2, label: undefined },
    { value: 2.5, label: undefined },
    { value: 3, label: undefined },
    { value: 3.5, label: undefined },
    { value: 4, label: "4h" },
  ],
  2,
  0.5,
  4,
  0.5,
  (value) => {
    return `${value} h`;
  }
);

export const waterConfig = new TimerConfig(
  [
    { value: 15, label: "15m" },
    { value: 30, label: undefined },
    { value: 45, label: undefined },
    { value: 60, label: undefined },
    { value: 75, label: undefined },
    { value: 90, label: undefined },
    { value: 105, label: undefined },
    { value: 120, label: "120m" },
  ],
  30,
  15,
  120,
  15,
  (value) => {
    return `${value} m`;
  }
);
