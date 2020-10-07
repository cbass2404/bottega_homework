arrayOne = [1, 2, 3];
arrayTwo = [5, 6, 7, 8];

function altElements(array1, array2) {
    let newArray = [];

    for (var i = 0, len = Math.max(array1.length, array2.length); i < len; i++) {
        if (i < array1.length) {
            newArray.push(array1[i]);
        }
        if (i < array2.length) {
            newArray.push(array2[i]);
        }
    }
    return newArray;
}

console.log(altElements(arrayOne, arrayTwo));
