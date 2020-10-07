let stringOfWords = "The quick brown fox jumps over the lazy dog.";

const upperCase = (string) => string.replace(/(^\w|\s\w)/g, m => m.toUpperCase());;

console.log(upperCase(stringOfWords));
