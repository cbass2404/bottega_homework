let objectOfStuff = {
  blue: "falcon",
  red: "devil",
  pink: "ranger",
  green: "lantern",
};

function objectPrinter(object) {
  var objectList = [];
  for (k in object) {
    if (object.hasOwnProperty(k)) {
      objectList.push(object[k]);
    }
  }
  return objectList;
}
console.log(objectPrinter(objectOfStuff));
