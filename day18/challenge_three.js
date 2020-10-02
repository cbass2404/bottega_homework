var stringOfWords = "green-red-black-white";

function splitAlpha(string) {
  return string.split("-").sort().join("-");
}

console.log(splitAlpha(stringOfWords));
