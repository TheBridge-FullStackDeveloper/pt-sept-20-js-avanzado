## Destructuring
El destructuring es un mecanismo que nos permite extraer propiedades de un objeto o elementos de un array, copiando dichos valores en nuevas variables creadas en la definición del destructuring.

```js
const obj = { a: 1, b: 2 }

// Si queremos extraer las propiedades a y b
const { a, b } = obj

console.log(a, b) // 1, 2
```

Cuando hacemos destructuring tal como lo hemos hecho arriba, NO CREAMOS UN OBJETO NUEVO, estamos creando DOS VARIABLES NUEVAS. La constante a y la constante b, que tendrán como valor los valores de las propiedades a y b del objeto creado antes.

Para hacer destructuring de un objeto es obligatorio que las variables creadas (a y b en este caso) se llamen igual que las propiedades del objeto cuyo valor estamos intentando extraer.

Para el caso de destructuring de arrays es un poquito distinto.

```js
const arr = [1, 2, 3, 4]

// Si queremos extraer los elementos 1, 2, 3 y 4
const [uno, dos, tres, cuatro] = arr

console.log(uno, dos, tres, cuatro) // 1 2 3 4
```

La principal diferencia es que, al no tener propiedades un array, tenemos que tener en cuenta LAS POSICIONES del array donde están los valores que queremos extraer. Es decir, que para crear una variable que tenga el valor 1 que está en el array le podemos poner el nombre que queramos pero SIEMPRE tendremos que respetar la posición del valor 1. Por eso, hemos creado la variable "uno" que obtiene el valor 1 porque está en la primera posición, como dicho valor.

Qué ocurriría si quisiéramos el valor que está en posiciones más avanzadas como el 3 o el 4, pero no queremos crear variables nuevas para los valores anteriores? En ese caso no necesitamos crear variables para los valores que no queramos, solo hay que dejar los espacios indicándolos con comas.

```js
const arr = [1, 2, 3, 4]

const [ , , , cuatro] = arr // Solo hemos indicado con comas los espacios hasta llegar a la posición que nos interesa y así poder crear la variable para que tenga el valor que queremos, el 4

console.log(cuatro) // 4
```

Es importante recalcar también, que cuando tenemos la definición del destructuring, en el lado izquierdo del "=" metemos entre "[]" o entre "{}" las variables que estamos creando que almacenarán los valores que extraemos. Esto NO indica que estamos creando un array o un objeto. Esto solo indica que el destructuring se hace de un array o de un objeto. Durante el destructuring se crean tantas variables como valores estemos extrayendo.


## Valores por defecto en el destructuring
Podemos indicar valores por defecto cuando hacemos destructuring para el caso de que las propiedades o los elementos no existan. Es importante recalcar que el lenguaje solo usará el valor por defecto con UNDEFINED.

La sintaxis es muy sencilla.
```js
const obj = { a: 1, b: 2 }

const { a = 3, b = 10 } = obj
```

En el ejemplo estamos indicando que a valdrá 3 y b valdrá 10 en caso de que a y/o b no existan (sean UNDEFINED).

Para los arrays es exactamente igual.
```js
const arr = [1, 2, 3]

const [uno, dos, tres, cuatro = 4] = arr

console.log(cuatro) // 4
```

Como 4 no existe, será asignado el valor por defecto en el momento de definición y asignación de la variable "cuatro"


## Alias en el destructuring
Además de los valores por defecto que vimos antes, podemos asignar alias a las variables que creamos cuando hacemos destructuring

```js
const obj = { a: 1, b: 2 }

const { a: uno } = obj

console.log(uno) // 1
```

La sintaxis es con dos puntos justo después de la variable que estamos creando. Cuando hacemos esto, el lenguaje NO crea la variable "a", crea en su lugar la variable "uno". Si intentásemos mostrar "a" tras asignarle el alias el intérprete nos tiraría error debido a que "a" no existe y no es posible acceder al valor de una variable sin declarar.

Para el caso de los arrays, debido a que importa la posición y no el nombre para obtener el valor, al poder poner cualquier nombre a las variables que creamos al hacer el destructuring, eso es similar a crear un alias, así que no tenemos alias cuando hacemos destructuring en arrays como sí tenemos al hacerlo con los objetos.


## Spread operator
El spread operator es un atajo que nos permite esparcir las propiedades o elementos de un objeto o de un array (No modificamos el objeto original)

Su sintaxis es con tres puntos delante del objeto o del array.

```js
const obj = { a: 1, b: 2 }

...obj // a: 1, b: 2 (Extrae ambas propiedades del objeto)
```

```js
const arr = [1, 2, 3, 4]

...arr // 1, 2, 3, 4 (Extrae los 4 elementos del array)
```

Los dos ejemplos expuestos arriba "esparcen" el contenido tanto del objeto como del array. El problema es que no se puede usar sin más. Siempre necesitamos enviar el contenido extraído a otro sitio. Sería como coger caramelos de una caja y ponerlos en otra (Pero el contenido de la primera caja no cambiaría)

```js
const obj = { a: 1, b: 2 }

const newObj = { ...obj }
```

```js
const arr = [1, 2, 3, 4]

const newArr = [...arr]
```

En ambos ejemplos anteriores, hemos vuelto a usar el spread operator para "esparcir" el contenido del objeto y del array, pero para que sea válido, hemos creado otro nuevo objeto y nuevo array y hemos soltado esas propiedades y esos elementos dentro de los nuevos objeto y array.

Después de esto tendremos un objeto "obj" con las propiedades a y b y otro objeto diferente con las propiedades a y b. Tendremos también un array "arr" con los elementos del 1 al 4 y un array completamente nuevo con los número del 1 al 4 también.

Usar el spread operator de esta manera sería como usar Object.assign para crear un nuevo objeto.

```js
const obj = { a: 1, b: 2 }

const newObjectWithAssign = Object.assign({}, obj) // { a: 1, b: 2 }
const newObjectWithSpread = { ...obj } // { a: 1, b: 2 }
```

También podemos usar esto para crear propiedades nuevas o modificar las que ya existen

```js
const obj = { a: 1, b: 2 }

const newObjectWithAssign = Object.assign({}, obj, { b: 4, c: 3 }) // { a: 1, b: 4, c: 3 }
const newObjectWithSpread = { ...obj, { b: 4, c: 3 } } // { a: 1, b: 4, c: 3 }
```

Esto hace que, además de crear el nuevo objeto con las propiedades de "obj", modificará la propiedad b existente (solo en el nuevo, no en el original) y añadirá la propiedad c.

Los últimos ejemplos de spread operators son con objetos, pero spread operators también nos permite hacerlo con arrays de la misma manera (El array original no se verá modificado).

```js
const arr = [1, 2, 3, 4]

const newArrayWithSpread = [...arr, 5, 6] // [1, 2, 3, 4, 5, 6]
```


## Rest operator
El operador rest es otro atajo, como spread operator. Se escribe exactamente igual que el spread operator, con los tres puntos, pero el escenario donde es usado es diferente. 

El escenario es el destructuring. Con el operador rest podemos obtener todos aquellos elementos restantes que aún no hemos intentado extraer.

```js
const obj = { a: 1, b: 2 }

const { ...rest } = obj // "rest" solo es un nombre que le aplicamos a la constante

console.log(rest) // { a: 1, b: 2 }
```

```js
const arr = [1, 2, 3, 4]

const [...rest] = arr 

console.log(rest) // [1, 2, 3, 4]
```

Como no hemos especificado ningún valor antes que "...rest", la constante "rest" habrá acumulado todas las propiedades o elementos del objeto en cuestión, ya que acumulará todos los restantes que no hayamos especificado.

La variable "rest" creada a través del operador rest meterá todos aquellos elementos o propiedades dentro de un nuevo array u objeto (dependerá del objeto o array origen)

```js
const obj = { a: 1, b: 2, c: 3 }

const { a, ...rest } = obj

console.log(rest) // { b: 2, c: 3 } (Extrae todos las propiedades restantes y las guarda en un objeto nuevo)
```

```js
const arr = [1, 2, 3, 4]

const [uno, ...rest] = arr

console.log(rest) // [2, 3, 4] (Extrae todos los elementos restantes y los guarda en un array nuevo)
```

En el caso de que no queden propiedades o elementos restantes para extraer, devolverá un objeto o un array vacío.

```js
const obj = { a: 1, b: 2 }

const { a, b, rest } = obj

console.log(rest) // {}
```

```js
const arr = [1, 2, 3, 4]

const [uno, dos, tres, cuatro, ...rest] = arr

console.log(rest) // []
```


## Rest operator y spread operator con funciones
Estos dos operadores no solo funcionan con objetos y arrays, también funcionan con funciones. Tenemos dos casos de uso.

1. Cuando definimos una función:
```js
const fn = (...args) => {}
```

2. Cunado ejecutamos una función:
```js
fn(...args)
```

En el primer caso estamos recibiendo todos los argumentos que la función pueda recibir. Sería la misma función que el OPERADOR REST que hemos comentado arriba
```js
// Si ejecuto una función con un número de argumentos x
fn(1, 2, 3, 4, 5)

// Podemos haber definido dicha función sin tener que conocer el número de argumentos que vamos a recibir.
const fn = (...args) => {} // Al poner los 3 puntos estaríamos creando una variable "args" que almacena todos los argumentos que le lleguen en un array (args sería igual que [1, 2, 3, 4, 5])
```

En el segundo caso estaríamos desperdigando todos los elementos del array o propiedades de un objeto y pasándoselos como argumentos a la función en cuestión. Sería la misma función que el SPREAD OPERATOR que hemos comentado arriba.
```js
// Si tenemos este array
const arr = [1, 2, 3, 4]

// Podemos desperdigar sus elementos y pasárselos como argumentos a la función
fn(...arr) // Sería como pasarle por separado 1, 2, 3 y 4 a la función por separado
```


## Problemática en la composición
Hemos visto hasta ahora que componer funciones es muy útil para poder programar manteniendo un paradigma funcional. Nos permite tener muchas funciones muy reutilizables, muy testeables, con una resiliencia muy alta y predecibles.

Pero es cierto que a la hora de componer todas estas pequeñas funciones, llega un punto que se hace complicada la lectura y su mantenimiento. Vamos a ver este caso con una pequeña kata y su solución

Kata: Crea una función que reciba una cadena y devuelva la cadena con la primera letra en mayúsculas

```js
// Creamos una constante con nuestro string para hacer las pruebas de la composición
const str = 'pyramidhead'

// Creamos un vocabulario de dominio lo suficientemente rico para abordar el problema
const toUpper = str => str.toUpperCase()
const head = ([head]) => head
const tail = ([_, ...tail]) => tail
const toStr = arr => arr.join('')
/**
 * Explicamos un poco qué hace cada una:
 *
 * toUpper: recibe un string y devuelve el string en mayúscula
 * head: recibe un array y devuelve el primer elemento de dicho array
 * tail: recibe un array y devuelve un nuevo array con todos los elementos de dicho array menos el primer elemento
 * toStr: recibe un array y devuelve un string resultante de la concatenación de todos los elementos de ese array
 */

// Primero vamos a componer para obtener la primera letra mayúscula
console.log(toUpper(head(str))) // P

// Después vamos a obtener el resto de la cadena sin la p
console.log(toStr(tail(str))) // yramidhead

// Por últimos vamos a unirlo todo para tener la cadena entera
const getStringCapital = () => `${toUpper(head(str))}${toStr(tail(str))}`
console.log(getStringCapital()) // Pyramidhead
```

Esta solución es válida y da lo que nos necesita, pero la solución es un poco sucia y se puede componer un poco más. Además tenemos el problema de que con funciones que llaman a funciones acabamos teniendo un buen número de paréntesis que crean complejidad en la legibilidad y mantenimiento de nuestra aplicación. Si quisiéramos aumentar la funcionalidad de nuestra composición sería más ilegible y menos mantenible.

Para mejorar la calidad de la composición y mejorar los puntos flacos que tenemos con la solución propuesta vamos a implementar dos tipos de funciones. Ambos vienen a hacer lo mismo pero en orden diferente. Las veremos a continuación.

Función compose:
Esta función currificada recibe por una parte una lista de funciones y por otra un valor o una serie de valores. Implementaremos la más sencilla; de implementación de un solo valor. Esta función nos permitirá transformar un valor de entrada a través de la lista de funciones que le pasemos.

```js
const compose = (...fns) => value =>
  [...fns].reverse().reduce((arg, fn) => fn(arg), value)
```

Vamos a ver un ejemplo sencillo para entender cómo usar esta función:

```js
const num = 100

const mulBy2 = n => n * 2
const half = n => n / 2
const numPlus10 = n => n + 10

const result = compose(mulBy2, half, numPlus10)(num)
/**
 * La función compose recibe el valor "num". Tras recibirlo ejecuta la lista de funciones de DERECHA A IZQUIERDA. Ejecuta primero "numPlus10" (que recibe como argumento "num") y devuelve el número recibido + 10. El resultado de la función "numPlus10" es pasado como argumento a la función "half". La función "half" divide entre 2 el número recibido como argumento y devuelve el resultado de dicha división. Tras la función "half" ejecuta "mulBy2" pasándole como argumento la respuesta de la función "half". Cuando termina con "mulBy2" compose devuelve el valor que retorna "mulBy2", que a su vez es el resultado del conjunto de transformaciones de todas las funciones de la lista que recibió en un principio.
 */

// Usar esta función sería similar a hacer lo siguiente
const result = mulBy2(half(numPlus10(num))) // Ejecución de dentro hacia afuera o de izquierda a derecha con compose
```

La otra función es tremendamente similar. Se llama pipe; y la única diferencia es el orden en el que se leen las funciones que recibe como argumentos.

```js
const pipe = (...fns) => value =>
  fns.reduce((arg, fn) => fn(arg), value)
```

Partiendo del mismo ejemplo de antes:
```js
const num = 100

const mulBy2 = n => n * 2
const half = n => n / 2
const numPlus10 = n => n + 10

const result = pipe(numPlus10, half, mulBy2)(num) // La ejecución se realizaría de IZQUIERDA A DERECHA
// Orden de ejecución: numPlus10 > half > mulBy2
```

Vamos a resolver la kata de antes a través de la función compose

```js
// Nos quedamos al final con esta solución; vamos a cambiar cómo construir la solución
const getStringCapital = () => `${toUpper(head(str))}${toStr(tail(str))}`

// Solución con COMPOSE
const getStringCapital = () => `${compose(toUpper, head)(str)}${compose(toStr, tail)(str)}`
```

De primeras encontramos una solución más legible porque no conlleva anidamiento de funciones y exceso de paréntesis. Compose, además, nos va a permitir añadir alguna función más. Vamos a crear una función adicional; se va a encargar de unir el resultado de ambas funciones y crear una cadena con ellos.

```js
const join = (fn1, fn2) => arg => `${fn1(arg)}${fn2(arg)}`
```

Podemos componerlas de la siguiente manera
```js
join(compose(toUpper, head), compose(toStr, tail))(str)
```

Esta solución final es mucho más limpia y mucho más legible; el resultado de ambas composiciones (una es la "P" y la otra es "yramidhead") son recibidas por la función join; ésta devuelve ambos resultados concatenados.
