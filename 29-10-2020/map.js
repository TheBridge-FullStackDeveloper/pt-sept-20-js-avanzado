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

// Al campo 1 del array le podemos añadir una propiedad nueva con .propiedad = valor
// adventurers[1].isWhiteWalker = true
// console.log(adventurers[1])

const houses = ['Targaryen', 'Stark', 'Baratheon', 'Lannister', 'Stark'];
houses.forEach((house, i) => {
  if (house === 'Stark') {
    houses[i] = 'White Walker';
  }
});
console.log(houses);

// Creamos un nuevo array de casas al estar modificado el original
const houses2 = ['Targaryen', 'Stark', 'Baratheon', 'Lannister', 'Stark'];
const houses2WithWhiteWalkers = houses2.map((house) => {
  if (house === 'Stark') {
    return 'White Walker';
  } else {
    return house;
  }
});
console.log(houses2WithWhiteWalkers);
