# Ejercicio 2 - Fetch and promises

Vamos a crear una ficha de personaje basándonos en la PokeAPI consumiendo la siguiente URL:

```
const url = 'https://pokeapi.co/api/v2/pokemon/1/'
```

Para ello, vamos a usar `fetch`, y obteniendo los resultados de la API, vamos a sacar de la respuesta únicamente los datos que nos hagan falta. Formateando el pokemon de la siguiente forma:

```
// Suponemos que res es la respuesta de la API
const pokemon = {
  name: res.name,
  sprite: res.sprites.other['official-artwork'].front_default,
  types: res.types => (mapeamos) => [{ type: 'grass', url: '...' }, { type: 'poison', url: '...' }],
  abilities: res.abilities => (mapeamos) => [{ ability: 'overgrow', url: '...' }, { type: 'chlorophyll', url: '...' }],
}
```

- ¡Recuerda hacer un `.map` para convertir el array `res.types` y `res.abilities` en el que esperamos!

Una vez tengamos el Pokemon, lo pintamos en el DOM (sin maquetar aún) imitando una "carta".

Cuando la carta esté pintada (sin CSS), vamos a modificar la función que se trae al pokemon de la API y a traernos, mediante DOS PROMESAS, la url de ambos `types` de forma paralela. De estos resultados, sacaremos 3 pokemon que compartan cada tipo con nuestro pokemon inicial y los meteremos en nuestro objeto de pokemon en un array con la clave (key) del mismo tipo que buscamos.

```
const pokemon = {
  name: res.name,
  sprite: res.sprites.other.official-artwork.front_default,
  types: res.types => (mapeamos) => [{ type: 'grass', url: '...' }, { type: 'poison', url: '...' }],
  abilities: res.abilities => (mapeamos) => [{ ability: 'overgrow', url: '...' }, { type: 'chlorophyll', url: '...' }],

  grass: ['ivysaur', 'venusaur', 'oddish],
  poison: [...],
}
```

La petición a los `types` devolverá una respuesta en la que podremos encontrar el array de pokemon de ese tipo en:

```
result.pokemon // Esto será un array,
```

- ¡Recuerda no sacar el pokemon del primer índice, ya que ese será bulbasaur que es con el que estamos trabajando!

Finalmente añade a la carta los nombres de los pokemon de cada tipo en dos columnas.

**Consejos de realización**

1. Desarrollar todo el código JavaScript necesario para que la aplicación.

2. Pintar el HTML con la información.

3. Dar estilos a nuestra información con CSS.
