const students = ['Zineb', 'Elisa', 'David'];
const allStudents = [...students, 'Dani'];
console.log(allStudents);

// Simulamos push funcional sin modificar el original
const push = (arr, value) => {
  const newArr = [...arr, value];
  return newArr;
};

const newStudents = push(students, 'Isabel');
console.log(newStudents);

// Simulamos shift funcional sin modificar el original
const shift = (arr) => {
  const [, ...restArr] = arr;
  return restArr;
};

const studentsWithoutFirst = shift(newStudents);
console.log(studentsWithoutFirst);

const pop = (arr) => {
  const copyArr = arr.slice(0, -1);
  return copyArr;
};
console.log(pop(studentsWithoutFirst));

// EJERCICIO
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

// EJERCICIO
// Calcula la suma de todos los elementos menos su anterior.
// si no hay elemento anterior, no debería sumar nada.
const nums = [1, 5, 30, -42, 94, 15];

const sumBefore = nums.reduce((acc, next, index) => {
  return acc + next;
});

console.log(sumBefore);

// EJERCICIO
// Calcula la suma de todos los elementos menos su anterior.
// si no hay elemento anterior, no debería sumar nada.
const nums = [1, 5, 30, -42, 94, 15];

/**
 * Función que reste a un número su elemento anterior de un array
 * @param {number} num
 * @param {number} pos
 * @param {number[]} arr
 * @returns {number}
 */
const diffWithPrev = (num, pos, arr) => num - arr[pos - 1];

/**
 * Suma dos números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const sum = (a, b) => a + b;

/**
 * Resuelve un reduce invocando a diffWithPrev
 * @param {number} acc
 * @param {number} next
 * @param {number} index
 * @param {number[]} arr
 * @returns {number}
 */
const resolver = (acc, next, index, arr) =>
  sum(acc, diffWithPrev(next, index, arr));

// Resuelvo el problema
const result = nums.reduce(resolver);
console.log(result);
