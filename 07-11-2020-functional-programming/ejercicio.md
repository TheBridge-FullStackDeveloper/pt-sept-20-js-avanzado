# Ejercicio PROGRAMACIÓN FUNCIONAL

## Enunciado:

Resuelve los ejercicios de la manera más declarativa posible y siempre que puedas intenta usar la función "compose" vista en la teoría. Intenta también reutilizar todas las funciones posibles antes de crear nuevas (puedes reutilizar las funciones de tandas de ejercicios anteriores)

COMPOSE
```js
const compose = (...fns) => value =>
  [...fns].reverse().reduce((arg, fn) => fn(arg), value)
```

## Ejercicios:

1. Crea un función que reciba un array y devuelva la longitud de dicho array

2. Crea una función que reciba un array y devuelva el último elemento de la lista

3. Crea una función que reciba un string y devuelva el string en mayúsculas

4. Crea una función que reciba un argumento y devuelva si es o no es un número

5. Crea una función que reciba un array y devuelva el array del revés

6. Crea una función que reciba un número indeterminado de argumentos y devuelva un array con todos ellos como elementos

7. Crea una función que reciba un número indeterminado de palabras y devuelva un nuevo array con solo aquellas palabras cuya longitud sea número impar

8. Crea una función que reciba un número indeterminado de palabras y devuelva la media del total de la longitud de todas las palabras del array

9. Crea una función que reciba un array de strings (estos strings pueden contener letras y números) y debe devolver un nuevo array con los strings sin números

Ejemplo:
fn(['ho3l2a', 'pal11a3br5a', 'r2o12sa0']) => ['hola', 'palabra', 'rosa']

10. Crea una función que reciba un array de palabras y un número. Esta función devolverá un nuevo array con aquellas palabras que NO tengan la misma longitud que el número pasado como segundo argumento

11. Crea una función que reciba un string y devuelva ese string con la primera y última letra en mayúscula

12. Crea una función que reciba un número indeterminado de palabras y devuelva una lista de tuplas. Cada tupla tendrá dos strings, ambos strings serán las mitades de cada palabra recibida como argumento. El primer elemento de la tupla será el string conformado por las letras pares y el segundo elemento será el string conformado por las letras impares.

Ejemplo:
fn('hola', 'palabra', 'rosa') => [['hl', 'oa'], ['plba', 'aar'], ['rs', 'oa']]
