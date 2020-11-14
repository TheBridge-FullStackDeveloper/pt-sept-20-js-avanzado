# Sintaxis

En este documento vamos a recoger las casuísticas que más nos confunden con respecto a la sintaxis de JavaScript.

## Promise.all

`Promise.all` es un método de las promesas que nos permite resolver muchas promesas (por ejemplo, peticiones a una API), de forma paralela.

Nos devolverá un array con todos los datos de estas promesas ordenados según las invoquemos.

**Ejemplo**

```
const getPokemon = () => fetch(...).then(res => res.json())
const getTypes = () => fetch(...).then(res => res.json())
const getAbilities = () => fetch(...).then(res => res.json())

Promise.all([getPokemon(), getTypes(), getAbilities()])
  .then((data) => {
    const pokemon = data[0] // Tiene los pokemon en el lugar donde usamos getPokemon()
    const types = data[1] // Tiene los tipos en el lugar donde usamos getTypes()
    const abilities = data[2] // Tiene las habilidades en el lugar donde usamos getAbilities()
  })
```
