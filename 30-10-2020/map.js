const adventurers = [
  {
    name: 'Sol',
    house: 'Targaryen',
  },
  {
    name: 'Zineb',
    house: 'Stark',
  },
  {
    name: 'Cristian',
    house: 'Baratheon',
  },
  {
    name: 'Elisa',
    house: 'Lannister',
  },
  {
    name: 'Fernando',
    house: 'Stark',
  },
];

const starks = adventurers
  .map((adventurer) => {
    if (adventurer.house === 'Stark') {
      return adventurer.name;
    } else {
      return null;
    }
  })
  // Con Boolean, negamos dos veces (convertimos a boolean) un valor
  // Y al ser una función, .filter() lo invoca para cada elemento
  .filter(Boolean);
// .filter((name) => {
//   return name;
// });

console.log(starks);

const num = 0;

console.log(!!0);
console.log(Boolean(0));

const name = 'John';

console.log(!!name);
console.log(Boolean(name));

console.log(!!null);
console.log(Boolean(null));

// Ejercicio sobre divisas
const eurToDollar = 1.16;
const itemList = [
  {
    name: 'shoes',
    price: 20,
    currency: 'EUR',
  },
  {
    name: 'shirt',
    price: 15,
    currency: 'USD',
  },
  {
    name: 'hat',
    price: 10,
    currency: 'EUR',
  },
];

const usdItems = itemList.map((item) => {
  if (item.currency === 'EUR') {
    item.currency = 'USD';
    item.price = item.price * eurToDollar;
  }

  return item;
});

console.log(usdItems);
