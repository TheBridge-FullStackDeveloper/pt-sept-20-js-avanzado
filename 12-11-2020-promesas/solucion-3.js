const numToPow = (num, n) => num ** n;
const sumPowToNumber = (base, num, n) => base + numToPow(num, n);
const powNumbersToN = (arr, n) =>
  arr.reduce((acc, next) => sumPowToNumber(acc, next, n), 0);
const squaresAndCubes = (arr1, arr2) =>
  powNumbersToN(arr1, 2) > powNumbersToN(arr2, 3);

console.log(squaresAndCubes([4, 5, 6], [1, 2, 3])); // true
console.log(squaresAndCubes([1, 2, 3], [0, 1, 2])); // true
console.log(squaresAndCubes([5, 3, 2, 4, 1], [15])); // false
console.log(squaresAndCubes([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1])); // false
console.log(squaresAndCubes([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1])); // true
