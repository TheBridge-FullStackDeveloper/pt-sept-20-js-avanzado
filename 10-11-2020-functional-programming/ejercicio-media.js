
// Repaso reduce
// Calcula la media de todos estos números
const nums = [1, 4, 6, 8, 9];

// 1. Sumamos todos los números
/**
 * Dado un array de números, devuelve la suma de todos ellos
 * @param {number[]} arr
 * @returns {number}
 */
const sum = (arr) =>
  arr.reduce((acc, next) => {
    return acc + next;
  }, 0);

// 2. Dividir la suma entre el total de elementos
// Forma menos pura (suma y divide)
// const average = (arr) => sum(arr) / arr.length;
// Forma más pura (divide)
/**
 * Dada una suma total y el número de elementos, devuelve la media
 * @param {number} total 
 * @param {number} length 
 * @returns {number}
 */
const average = (total, length) => total / length;

// RESULTADO:
const result = average(sum(nums), nums.length);
