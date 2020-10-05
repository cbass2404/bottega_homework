let numArray = [5, 3, 6, 43, 5];

// function declaration

function numSumFO(array) {
  var sum = 0;
  for (num of array) {
    sum += num;
  }
  return sum;
}

console.log(numSumFO(numArray));

// function expression

let numSummer = function (array) {
  sum = 0;
  for (num of array) {
    sum += num;
  }
  return sum;
};

console.log(numSummer(numArray));

// function arrow

const numSumAF = array => array.reduce((a, b) => a + b, 0)

console.log(numSumAF(numArray))