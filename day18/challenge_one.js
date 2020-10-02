function hexGenerator() {
  let hexList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  var hexColor = ["#"];
  while (hexColor.length <= 6) {
    hexColor.push(hexList[Math.floor(Math.random() * hexList.length)]);
  }
  return hexColor.join("");
}

console.log(hexGenerator());
