const url = 'https://pokeapi.co/api/v2/pokemon/1/';
const pokemon = {};

const formatPokemonFromAPI = (pokemonToFormat, apiData) => {
  // Creo el pokemon usando los datos de la API
  pokemonToFormat.name = apiData.name;
  pokemonToFormat.sprite =
    apiData.sprites.other['official-artwork'].front_default;

  pokemonToFormat.types = apiData.types.map(({ type }) => {
    return {
      type: type.name,
      url: type.url,
    };
  });

  pokemonToFormat.abilities = apiData.abilities.map(({ ability }) => {
    return {
      ability: ability.name,
      url: ability.url,
    };
  });
};

// Código asyncrono, espérate => async/await
const fetchAndPopulatePokemon = async () => {
  const res = await fetch(url);
  const data = await res.json();

  // Invoco a la función que formatea el pokemon dada la info de la API
  formatPokemonFromAPI(pokemon, data);
  // Aquí ya tenemos datos dentro del objeto pokemon
  console.log(pokemon);

  const typeName = pokemon.types[0].type;
  const typeUrl = pokemon.types[0].url;
  const res2 = await fetch(typeUrl);
  const typeData = await res2.json();

  const pokemonFromType = typeData.pokemon.slice(1, 4);
  const pokemonNames = pokemonFromType.map((poke) => poke.pokemon.name);
  pokemon[typeName] = pokemonNames;

  const typeName2 = pokemon.types[1].type;
  const typeUrl2 = pokemon.types[1].url;
  const res3 = await fetch(typeUrl2);
  const typeData2 = await res3.json();

  const pokemonFromType2 = typeData2.pokemon.slice(1, 4);
  const pokemonNames2 = pokemonFromType2.map((poke) => poke.pokemon.name);
  pokemon[typeName2] = pokemonNames2;

  console.log(pokemon);
};

fetchAndPopulatePokemon();

// Aquí pokemon sigue estando vacío porque no ha ocurrido el .then
console.log(pokemon); // {}
