// const rickMortyURL = 'https://rickandmortyapi.com/api/character';
// const pokeURL = 'https://pokeapi.co/api/v2/pokemon/ditto/';

// console.time();
// fetch(rickMortyURL)
//   .then((res) => res.json())
//   .then((rickMortyData) => {
//     console.log('HA TERMINADO RICK Y MORTY');
//     console.log(rickMortyData);

//     fetch(pokeURL)
//       .then((res) => res.json())
//       .then((pokemonData) => {
//         console.log('HA TERMINADO POKEMON');
//         console.log(pokemonData);

//         console.timeEnd();
//       });
//   });

// fetch(rickMortyURL)
//   .then((res) => res.json())
//   .then((rickMortyData) => {
//     console.log('HA TERMINADO RICK Y MORTY');
//     console.log(rickMortyData);
//   });

// fetch(pokeURL)
//   .then((res) => res.json())
//   .then((pokemonData) => {
//     console.log('HA TERMINADO POKEMON');
//     console.log(pokemonData);
//   });

// console.time();

// Promise.all([
//   fetch(rickMortyURL).then((res) => res.json()),
//   fetch(pokeURL).then((res) => res.json()),
// ]).then((data) => {
//   const rickMortyData = data[0];
//   const pokemonData = data[1];

//   console.timeEnd();
// });
