## Repaso forEach
Es una función que pertenece a la api de Array. Se encarga de iterar sobre la lista a la que apunta (el receptor es la lista).
Esta función recibe, además, una función, que será ejecutada por el forEach para cada elemento del array.
#### IMPORTANTE: forEach devuelve UNDEFINED!, no tiene return, con lo que retorna nada

## Repaso map
Igual que el caso anterior, es una función que pertenece a la api de Array. Itera sobre la lista a la que apunta (la lista es el receptor de la función).
La función map recibe, además, una función, que será ejecutada por el map para cada elemento del array.
#### IMPORTANTE: map devuelve un NUEVO ARRAY. El array resultante tendrá SIEMPRE el MISMO NÚMERO DE ELEMENTOS, pero el CONTENIDO de cada elemento podrá VARIAR respecto del ORIGINAL.

## Repaso filter
Como los casos anteriroes, es una función que pertenece a la api de Array. Itera sobre la lista a la que apunta (el receptor de la función es el array o la lista sobre la que iteramos).
La función filter recibe, además, una función, que será ejecutada por la función filter para cada uno de los elementos del array.
#### IMPORTANTE: filter devuelve un NUEVO ARRAY. El array resultante tendrá SIEMPRE el MISMO CONTENIDO, pero la LONGITUD podrá ser VARIABLE.

## Función Reduce
Función que pertenece a la api de Array. Itera sobre la lista a la que apunta. La función reduce recibe dos argumentos:
1. Una función que será ejecutada por la función reduce por cada uno de los elementos del array.
2. Un valor inicial

La función que recibe como primer argumento recibirá a su vez hasta 4 argumentos, a saber:
1. Un ACUMULADOR
2. El valor ACTUAL (el elemento del array que toca)
3. El índice o posición del array actual
4. El array original

El valor inicial mencionado antes será el primer valor que tenga el argumento ACUMULADOR.
Cada vez que retornemos algo de la función, lo guardará el ACUMULADOR.
  
Ejemplo: Suma los valores del array con la función reduce
```js
  const numsArray = [1, 2, 3, 4, 5]
  const suma = numsArray.reduce((accumulator, current, index, array) => {
    // accumulator: valor anterior (la primera vez tendrá el valor inicial)
    // current: valor actual
    return accumulator + current
  }, 0) // El 0 es el valor inicial y el primer valor que tendrá accumulator

  console.log(suma) // 15
```

## Qué es la programación funcional?
La programación funcional es un paradigma de programación donde prima la reutilización y la abstracción de funciones. A través de este paradigma obtenemos funciones altamente reutilizables, de responsabilidades sencillas y previsibles.
 
## Qué son las funciones puras?
Son las funciones más deseables trabajando desde un paradigma funcional. Son funciones cuyas características principales son:
1. No producen efectos secundarios
2. Dada la misma entrada por argumentos, devuelven siempre la misma salida. Son PREVISIBLES

## Qué es el estado de una aplicación?
El estado de una aplicación es el conjunto de todas aquellas variables que son almacenadas durante todo el transcurso de la aplicación y son mutadas durante el transcurso de la aplicación.

## Qué es la programación tácita?
No es un tipo de programación o un paradigma. Es una evolución de la programación funcional. Es la consecución natural del paradigma funcional.
Recibe también el nombre "point-free programming" y es declarar el menor número de argumentos posibles a la hora de componer las funciones y crear abstracciones.

Ejemplo sencillo
```js
  const numbersList = [1, 2, 3, 4, 5]

  const filteredList = numbersList.filter(number => {
    return number % 2 === 0
  })
```
La función filter recibe una función que dado un número devuelve true o false si dicho número es par.
Vamos a crear una función que hace lo mismo
```js
  const isPair = n => n % 2 === 0
```
Ya que ambas funciones (la que recibe la función filter y la función isPair) hacen exactamente lo mismo y reciben lo mismo, podemos cambiar una por otra.
```js
  const filteredList = numbersList.filter(isPair)
```
#### No declaramos el argumento que recibirá, lo hace de manera implícita.
  

## Qué son los efectos secundarios?
Los efectos secundarios son modificaciones sobre el estado de la aplicación

## Qué es la currificación?
La currificación es la ejecución parcial de una función. Una función currificada solo devolverá el resultado cuando todos los argumentos hayan sido recibidos.

Ejemplo con funciones clásicas
```js
  function sum(a) {
    return function(b) {
      return function(c) {
       return a + b + c
      }
    }
  }
```
Ejemplo con funciones flecha
```js
  const sum = a => b => c => a + b + c
```
En ambos casos, cada vez que ejecutemos la función, devolverá una función que esperará recibir más argumentos hasta que tenga todos los argumentos y la suma sea devuelta.
  
## Imperativo vs declarativo
- El paradigma imperativo es una forma de pensar orientada a la encapsulación de funcionalidades. Nos centramos en CÓMO obtenemos la solución al problema. Hay que investigar los detalles de la implementación para poder saber qué hacen las funciones.

- El paradigma declarativo es una forma de pensar orientada a la abstracción de las funcionalidades. Nos centramos en QUÉ hacen las funciones, no en el CÓMO lo hacen. Los detalles de la implementación se encuentran enterrados en dichas abstracciones.

Ejemplo de ejercicio sencillo realizado de forma imperativa y de forma declarativa
* FizzBuzz: dada una lista de números devuelve una array de números donde todos los múltiplos de 3, en lugar del número devuelva 'fizz', los múltiplos de 5 devuelvan 'buzz' y los múltiplos de 3 y de 5 'fizzbuzz'

Vamos a crear primero un array
```js
  const length = 20
  const numbersList = Array.from({ length }).map((_, i) => i + 1)
```

Forma imperativa
```js
  // IMPERATIVO
  function fizzBuzzImperativo(list) {
    const array = []
    for(let n of list) {
      if(n % 3 === 0 && n % 5 === 0) {
        array.push('fizzbuzz')
      } else if(n % 3 === 0) {
        array.push('fizz')
      } else if(n % 5 === 0) {
        array.push('buzz')
      } else {
        array.push(n)
      }
    }
    return array
  }

  console.log(fizzBuzzImperativo(numbersList))
```

Forma declarativa
```js
  // DECLARATIVO
  const isDivisibleBy3 = num => num % 3 === 0
  const isDivisibleBy5 = num => num % 5 === 0

  const isFizz = element => isDivisibleBy3(element) ? 'fizz' : ''
  const isBuzz = element => isDivisibleBy5(element) ? 'buzz' : ''

  const isFizzBuzz = element =>
    `${isFizz(element)}${isBuzz(element)}`

  const or = arg1 => element => arg1(element) || element

  const fizzBuzzDeclarativo = list => list.map(or(isFizzBuzz)) // Aquí aplicamos un poco de programación tácita. No definimos los argumentos que van a recibir.

  console.log(fizzBuzzDeclarativo(numbersList))
```




