const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const occurrenceCounter = (arr) =>
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

const dataPrinter = occurrenceCounter(data);

pushToDom(
  ".sum-instance-target",
  "Li",
  `Car: ${dataPrinter["car"]}
  Truck: ${dataPrinter["truck"]}
  Bike: ${dataPrinter["bike"]}
  Walk: ${dataPrinter["walk"]}
  Van: ${dataPrinter["van"]}`
);
