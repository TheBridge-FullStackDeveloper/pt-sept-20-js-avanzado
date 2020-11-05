# PROGRAMACIÓN FUNCIONAL

## Enunciado:
El procedimiento a seguir será el mismo que la vez anterior. Ejercicios más sencillos que pueden ayudar en ejercicios posteriores. Recordad también que tenéis las funciones del día anterior para ayudaros a resolver los siguiente.

## Ejercicios:

1. Crea una función que recibe una cadena y devuelve dicha cadena en mayúsculas

2. Crea una función que reciba un str y devuelva la cadena del revés

3. Crea una función que reciba una cadena y devuelva un array con las letras como elementos del array

4. Crea una función que reciba un array y devuelva un string formado por todos los elementos del array

5. Crea una función currificada que reciba dos funciones en la primera ejecución, y una lista de, al menos, dos argumentos para la segunda ejecución. La función comprobará si la ejecución de la primera función recibida en la primera ejecución con el segundo argumento recibido en la segunda ejecución es true. Si lo es, devuelve la ejecución de la segunda función recibida con el primer argumento de la segunda ejecución. Si no es true la evaluación, devuelve el primer argumento recibido en la segunda ejecución.

6. Crea una función que recibe una cadena y devuelve esa cadena con la primera y última letra en mayúsculas.

7. Crea una función que reciba una lista de números y una lista con el abecedario y devuelva una nueva lista de tuplas donde las tuplas tendrán como primer valor el número de la primera lista que corresponda a la posición y el segundo valor la letra del abecedario que corresponda en posición por el primer valor. Si necesitas funciones auxiliares para abordar el problema, puedes hacerlas, pero recuerda las que ya tienes hechas. Recuerda la regla: NO TE REPITAS.
Ejemplo: fn([1, 4, 1], ['a', 'b', 'c', 'd',...]) => [[1, 'b'], [4, 'e'], [1, 'b']]

8. Crea una función que reciba una cadena y devuelva la cadena con todas las letras pares en mayúsculas y el string del revés: fn('hola') => 'aLoH'

9. Crea una función que reciba dos arrays, un array con letras y otro array con el abecedario. La función debe calcular la media de las posiciones de las letras del primer array respecto del segundo y sacar la letra que corresponda a la posición indicada por la media dentro del abecedario.
Ejemplo: fn(['a', 'c', 'e'], ['a', 'b', 'c', 'd', 'e', ...]) => a es posición 0 en abecedario, c es posición 2 y e es posición 4. Sumadas las posiciones es 6 y la media es 2. En el abecedario la posición 2 es la c. Así que esa es la respuesta, 'c'