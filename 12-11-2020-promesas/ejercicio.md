## Ejercicio 1

Usando `HTML` vamos a pintar un `div` que parezca una bombilla (puede ser un círculo).
La bombilla tendrá dos clases, `bulb-on` y `bulb-off` estando de color amarillo en la primera y gris en la segunda.

Usando `HTML` vamos a pintar una caja con un toggle similar a un switch.
La bombilla tendrá dos clases, `toggle-on` y `toggle-off` estando a la derecha el botoncito cuando esté en on y a la izquierda cuando esté en off.

- Crearemos un intervalo que ocurra cada 3 segundos que apague y encienda la bombilla sucesivamente.
- Crearemos un intervalo que ocurra cada 5 segundos que apague y encienda el toggle sucesivamente.
- Cuando clickemos el toggle, apagaremos el bucle de intervalos de los dos elementos y ambos elementos quedarán apagados

## Ejercicio 2

¡Vamos a crear una pila de ejecución de código! Para ello, vamos a seguir los siguientes pasos:

1. Crea un `div` con la propiedad `id=stack`, que almacenará varios `div` dentro de forma vertical (similar a un edificio de varias plantas).

2. Crea un botón que, al ser clickado, añada un nuevo `div` al stack en la parte superior.

3. Cuando termines de crear tantos elementos en el stack como desees, crearás un botón `Hacer tarea` que elimine, uno a uno cada vez que lo clickamos, los elementos de la parte de abajo de la pila, pintándola de nuevo con menos elementos que antes. Esta eliminación ocurrirá tras `200ms` de haber clickado el botón.

---

**Empieza el Bonus**

4. Ahora añade llévate la representación de los `div` a JavaScript en forma de array (estos elementos serán strings con el nombre `'task'`) y píntalos. Recuerda añadir los nuevos elementos al array para pintar la pila o stack siempre que pulses el botón de añadir.

5. Una vez tengas tu código representando el stack en JS, crea un nuevo botón `Añadir con delay`, esto añadirá una tarea que se llamará `'delayed'` al stack.

6. Ahora que tienes todas las tareas mezcladas (añade un par de tareas normales y un par delayed), modifica la función del botón `Hacer tarea` para que, si el siguiente elemento del stack es `delayed`, lo envíe al final del stack y lo elimine pasados `1500ms`. Deberá verse visualmente como se coloca al final del stack y desaparece.
