## Ejercicio

Dado varios arrays de elementos...

```
const names = ['Frodo', 'Gandalf', 'Balrog', 'Galadriel'];
const ages = [30, 400, 2000, 1200];
const races = ['hobbit', 'human', 'demon', 'elf'];
```

Recorreremos uno de estos, y usando el método .reduce junto con la posición del elemento, crearemos lo siguiente:

```
{
  0: {
    name: 'Frodo',
    age: 30,
    race: 'hobbit'
  },
  1: {
    name: 'Gandalf',
    age: 400,
    race: 'human'
  }
  ...
}
```
