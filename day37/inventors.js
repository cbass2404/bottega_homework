const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const inventorFilter = () => {
  return inventors.filter((inventor) => {
    if (inventor["year"] >= 1500 && inventor["year"] < 1600) {
      pushToDom(
        ".filter-target",
        "Li",
        `${inventor["first"]} ${inventor["last"]}, Year: ${inventor["year"]}`
      );
    }
  });
};
inventorFilter();

const inventorMap = () => {
  return inventors.map((inventor) => {
    pushToDom(".map-target", "Li", `${inventor["first"]} ${inventor["last"]}`);
  });
};
inventorMap();

const inventorSorted = () => {
  const sortedInventors = inventors.sort((a, b) => a.year - b.year);
  return sortedInventors.map((inventor) => {
    pushToDom(
      ".sorted-age-target",
      "Li",
      `${inventor["first"]} ${inventor["last"]} Born: ${inventor["year"]}`
    );
  });
};
inventorSorted();

const inventorsTotalYears = () => {
  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);

  pushToDom(".age-target", "Li", `${totalYears} lived between them all`);
};
inventorsTotalYears();

const inventorsSortedAge = () => {
  const newInventorList = [];

  inventors.map((inventor) => {
    newInventorList.push({
      first: `${inventor["first"]}`,
      last: `${inventor["last"]}`,
      age: inventor["passed"] - inventor["year"],
    });
  });

  const sortedInventors = newInventorList.sort((a, b) => b.age - a.age);

  return sortedInventors.map((inventor) => {
    pushToDom(
      ".oldest-target",
      "Li",
      `${inventor["first"]} ${inventor["last"]}, Age: ${inventor["age"]}`
    );
  });
};
inventorsSortedAge();
