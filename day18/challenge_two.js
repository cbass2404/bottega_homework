var unsortedString = "Hello, I like peaches2404.";

function stringSorter(stringName) {
  return stringName.split("").sort().join("");
}
console.log(stringSorter(unsortedString));
