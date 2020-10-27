const pokemonArr = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
];

let pokemonWithC = [];
for (let i = 0; i < pokemonArr.length; i++) {
  const pokemon = pokemonArr[i];
  // Puedo acceder a las posiciones de las letras de los strings como con los arrays
  console.log(pokemon[0]);
  // Empujamos el pokemon que empieza por 'c' al array pokemonWithC
  if (pokemon[0] === 'c') {
    pokemonWithC.push(pokemon);
  }
}
console.log(pokemonWithC);

// Para dar la vuelta a un array, podemos usar .reverse().
// Devuelve UN NUEVO ARRAY puede modificar el original
// const reversedPokemonArr = pokemonArr.reverse()
// console.log(reversedPokemonArr)

// MÉTODO ARRAY.FOREACH()
pokemonWithC = [];
pokemonArr.forEach((pokemon, i) => {
  console.log(pokemon, i);
  if (pokemon[0] === 'c') {
    pokemonWithC.push(pokemon);
  }
});
console.log(pokemonWithC);

// Ejercicio
const lortCharacters = [
  {
    name: 'Frodo',
    isInFellowship: true,
  },
  {
    name: 'Smeagle',
    isInFellowship: false,
  },
  {
    name: 'Aragorn',
    isInFellowship: true,
  },
  {
    name: 'Gimli',
    isInFellowship: true,
  },
  {
    name: 'Sauron',
    isInFellowship: false,
  },
];
// Vamos a crear un nuevo array theFellowship que contenga solamente los personajes que SÍ estén
// en la Compañía del Anillo (isInFellowship === true).
// Creamos un array vacío al que empujamos los valores que nos sirvan del array
// lortCharacters usando .forEach
const theFellowship = [];
lortCharacters.forEach((character) => {
  if (character.isInFellowship) {
    theFellowship.push(character);
  }
});
// Usar forEach es como hacer esto ⬇️
// for (let i = 0; i < lortCharacters.length; i++) {
//   const character = lortCharacters[i];
// }

const numsOriginal = [10, 20, 30, 40, 50];
numsOriginal.forEach((numElement, i) => {
  console.log(numElement);
});

// Ejercicio
const nums = [5, 10, 15, 20, 25];
// Dado un array de números, empuja a un nuevo array, cada número del original multiplicado por 2.
const numsMultiplied = [];
nums.forEach((num) => {
  numsMultiplied.push(num * 2);
});

console.log(numsMultiplied);
