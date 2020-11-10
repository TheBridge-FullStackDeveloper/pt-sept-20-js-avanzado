## Ejercicio 1

Dado varios arrays de elementos recorreremos uno de estos, y usando el método .reduce junto con la posición del elemento para crear un objeto con los índices como claves, que tengan valores como objetos con los campos `name`, `age` y `race` apuntando al de su correspondiente índice en el array original.

```
const names = ['Frodo', 'Gandalf', 'Balrog', 'Galadriel'];
const ages = [30, 400, 2000, 1200];
const races = ['hobbit', 'human', 'demon', 'elf'];
```

**Ejemplo del objetivo**

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

---

## Ejercicio 2

Dado un array de números intenta, de manera declarativa y con las funciones más puras posibles, obtener la diferencia de los pares de números desde los extremos hacia dentro del array, no sin antes haber dado la vuelta a los dígitos de los números y al mismo array de partida.

**Ejemplo del objetivo**

```
// Dado un array de partida:
[12, 5, 30, 40]

// Primero damos la vuelta a los números:
['21', '5', '03', '04']

// Ahora damos la vuelta al array:
['04', '03', '5', '21']

// Y restamos los pares de números del principio y final hacia el punto medio:
(4 + 21) - (3 + 5)

// El resultado será
17
```

**Prueba con los arrays:**

```
const arrayA = [12, 5, 30, 40]
const arrayB = [54, 9, 11, 32, 40, 6]
const arrayC = [11, 20, 33, 40, 55]
```

---

## Ejercicio 3

Dados dos arrays de números con longitud mayor o igual a 1, crea una función `squaresAndCubes` que devuelva `true` en caso de que que `la suma de los cuadrados de los números` del primer array sea estrictamente superior a `la suma de los cubos de los números` del segundo array.

**Ejemplo del objetivo**

```
// Dados los arrays de inicio:

squaresAndCubes([4, 5, 6], [1, 2, 3]);

// Tendremos la suma de los cuadrados del primer array:
16 + 25 + 36 => 77

// Y la suma de los cubos del segundo array:
1 + 8 + 27 => 36

// Por tanto, devolveremos TRUE ya que 77 > 36.
```

**Prueba con los arrays:**

```
squaresAndCubes([4, 5, 6], [1, 2, 3]); // true
squaresAndCubes([1, 2, 3], [0, 1, 2]); // true
squaresAndCubes([5, 3, 2, 4, 1], [15]); // false
squaresAndCubes([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]); // false
squaresAndCubes([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]); // true
```
