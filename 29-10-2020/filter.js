const clothes = [
  'camiseta - azul',
  'camiseta - roja',
  'camiseta - verde',
  'vestido - verde',
  'vestido - negro',
  'jersey - rosa',
];

const dressesWithPush = [];

clothes.forEach((clothe) => {
  if (clothe.includes('vestido')) {
    dressesWithPush.push(clothe);
  }
});

console.log(dressesWithPush);

// VALORES FALSOS 0 false undefined null ''
const filteredDresses = clothes.filter((clothe) => {
  if (clothe.includes('vestido')) {
    return true;
  }
});
console.log(filteredDresses);

// Ejercicio
const lotrCharacters = [
  {
    name: 'Frodo',
    race: 'hobbit',
  },
  {
    name: 'Smeagle',
    race: 'hobbit',
  },
  {
    name: 'Aragorn',
    race: 'humano',
  },
  {
    name: 'Gimli',
    race: 'enano',
  },
  {
    name: 'Sauron',
    race: 'humano',
  },
  {
    name: 'Bilbo',
    race: 'hobbit',
  },
];

// Filtra de entre todos los personajes que tenemos en lotrCharacters todos los personajes
// que sean hobbits en un nuevo array hobbits
const hobbits = lotrCharacters.filter((character) => {
  return character.race.includes('hobbit');
});
console.log(hobbits);

const nums = [1, 3, 5, 7, 9];
const greaterThanFour = nums.filter((num) => {
  return num > 4;
});
console.log(greaterThanFour);
