// Ejercicio 2

// Dado un array de números intenta, de manera declarativa y con las funciones más puras posibles, obtener la diferencia de los pares de números desde los extremos hacia dentro del array, no sin antes haber dado la vuelta a los dígitos de los números y al mismo array de partida.

const numsArr = [54, 9, 11, 32, 40, 6];

// 1. Crear funciones para formatear el array
// Este rest operator convierte todos los argumentos en un array
const pipe = (...fns) => (v) => {
  return fns.reduce((acc, fn) => {
    return fn(acc);
  }, v);
};

// Función que revierte el orden de un array
const reverseArr = (arr) => arr.reverse();

// Función que transforma un número a un string
const numToString = (num) => num.toString();

// Función que da la vuelta a un string
const reverseString = (str = '') => str.split('').reverse().join('');

// Función que da la vuelta a un número y devuelve un type number
// Composición de funciones:
// const reverseNum = (num) => Number(reverseString(num.toString()));
// Pipe de funciones:
const reverseNum = (num) => pipe(numToString, reverseString, Number)(num);

// Función que da la vuelta a todos los números de un array
const reverseNums = (arr) => arr.map(reverseNum);

// 2. Crear funciones de diferencia en el array
const diffPairFromAcc = (acc, next, index, pairIndex, arr) => {
  const endNumber = arr[pairIndex];
  return index > 0 ? acc - (next + endNumber) : acc + (next + endNumber);
};

const diffNumsFromPair = (acc, next, index, arr) => {
  const pairIndex = arr.length - 1 - index;
  return index === pairIndex
    ? acc - next
    : diffPairFromAcc(acc, next, index, pairIndex, arr);
};

const calculateDiffPairs = (arr) => {
  const limit = arr.length / 2;

  return arr.reduce(
    (acc, next, index, arr) =>
      index < limit ? diffNumsFromPair(acc, next, index, arr) : acc,
    0
  );
};

const diffPairs = pipe(reverseNums, reverseArr, calculateDiffPairs)(numsArr);
console.log(diffPairs);
