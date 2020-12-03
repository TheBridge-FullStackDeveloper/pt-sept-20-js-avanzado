const myArr = ['4', '6', '6', '4', '4', '3', '3', '1', '1', '6', '11'];

console.log(
  myArr.sort((a, b) => {
    console.log('A es:', a);
    console.log('B es:', b);

    return Number(b) - Number(a);
  })
);

const names = ['Luke', 'Leia', 'Obi Wan', 'Darth Vader'];

const sortAsc = (arr) => arr.sort();
// TODO: Investigar mejor sort
const sortDesc = (arr) =>
  arr.sort((a, b) => b[0].charCodeAt() - a[0].charCodeAt());

console.log(sortAsc(names));
console.log(sortDesc(names));

const orderNumsAsc = (numArr) => numArr.sort((a, b) => Number(a) - Number(b));
const orderNumsDesc = (numArr) => numArr.sort((a, b) => Number(b) - Number(a));

console.log(orderNumsAsc(myArr));
console.log(orderNumsDesc(myArr));
