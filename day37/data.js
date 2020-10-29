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

const dataMapper = () => {
  const totalInstance = [
    { car: 0 },
    { truck: 0 },
    { bike: 0 },
    { walk: 0 },
    { van: 0 },
  ];

  // data.map(item);

  return totalInstance.map((item, { k, v }) => {
    pushToDom(".sum-instance-target", "Li", `${item[k]}`);
  });
};
dataMapper();
