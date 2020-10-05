let numArray = [5, 3, 6, 43, 5];

// traditional for-loop
function numSumTF(array) {
  var sum = 0;
  for (i = 0; i < numArray.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(numSumTF(numArray));

// for-in loop
function numSumFI(array) {
  var sum = 0;
  for (idx in array) {
    sum += array[idx];
  }
  return sum;
}

console.log(numSumFI(numArray));

// for-of loop
function numSumFO(array) {
  var sum = 0;
  for (num of array) {
    sum += num;
  }
  return sum;
}

console.log(numSumFO(numArray));

// while loop

function numSumW(array) {
  var sum = 0;
  i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

console.log(numSumW(numArray));

// do-while loop

function numSumDW(array) {
  var sum = 0;
  i = 0;
  do {
    sum += array[i];
    i++;
  } while (i < array.length);
  return sum;
}

console.log(numSumDW(numArray));
