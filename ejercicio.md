# Ejercicio JUEGO DE TRONOS

## Enunciado:

Dado un array de personajes de juego de tronos, vamos a crear una web en la que, a través de JavaScript y todo lo aprendido en clase hasta el momento, conseguiremos filtrar, transformar y mostrar la información en el DOM.

## Pasos:

1. Crea un Codepen, y en el HTML añade un `<div></div>` que tenga una **id** que se llame `container`.

2. Usando la misma técnica vista con la tienda de zapatos, crea una carta inicial en el HTML donde uses los mismos campos que tienen las cartas de personajes y se vean de forma decente. Tras esto, usa ese HTML como base para recorrer el array `characters` y pintar todas las cartas desde JavaScript cuando la aplicación carga por primera vez. Recuerda pintar los personajes con su imagen y el banner de su casa (su bandera) en la carta.

3. Mete el código de pintado en una función `paintCharacters` e invócala al final de todo tu JS.

4. Ahora que tienes los personajes pintados con sus imágenes en formato de carta, crea un `<select></select>` que tenga como opciones `<option></option>` tantas como casas `house` distintas haya en el array de personajes. ¡Recuerda ponerle una `id` al select (por ejemplo `house-filter`)!

5. Usando una variable global `let houseToFilter = ''`, cambia su valor según la opción seleccionada en el `<select></select>` que acabamos de hacer. Tras cambiar el valor, repinta SOLAMENTE los personajes que pertenezcan a DICHA CASA `house`. Es decir, su valor `character.house` sea igual a `houseToFilter`.

6. Adapta el select con una opción que tenga `value=""` que diga `Sin casa seleccionada` para comprobar que el filtro se puede resetear.

7. Crea ahora un botón que diga `Convertir a caminantes` y que tenga la **id** `whitewalker`. Añade un evento al botón para que repinte todos los personajes cambiando su imagen por la del líder de los Caminantes Blancos con url `https://s2.r29static.com/bin/entry/8ce/x/1837616/image.png`. Comprueba que todas las imágenes de los personajes son ahora la nueva imagen.

8. Crea un botón que diga `Revertir transformación` con la **id** `revert`. Pintaremos de nuevo todos los personajes con su imagen normal. ¡Les habremos curado de su transformación!

## Datos de partida:

```
const characters = [
  {
    name: 'Jon Snow',
    house: 'Stark',
    age: 24,
    picture:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png',
    banner:
      'https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142',
  },
  {
    name: 'Eddard Stark',
    house: 'Stark',
    age: 41,
    picture:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/1/13/Eddard_Stark_HBO.jpg/revision/latest?cb=20181021172732&path-prefix=es',
    banner:
      'https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142',
  },
  {
    name: 'Arya Stark',
    house: 'Stark',
    age: 11,
    picture:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/a/a9/AryaShipIronThrone.PNG.png/revision/latest?cb=20190909001444&path-prefix=es',
    banner:
      'https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142',
  },
  {
    name: 'Ramsay Bolton',
    house: 'Bolton',
    age: 20,
    picture:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ramsay_Bolton-_-Iwan_Rheon.jpg/220px-Ramsay_Bolton-_-Iwan_Rheon.jpg',
    banner:
      'https://static.wikia.nocookie.net/gameofthrones/images/d/dd/House-Bolton-Main-Shield.PNG/revision/latest?cb=20161231131431',
  },
  {
    name: 'Theon Greyjoy',
    house: 'Greyjoy',
    age: 19,
    picture:
      'https://upload.wikimedia.org/wikipedia/en/5/51/Theon_Greyjoy-Alfie_Allen.jpg',
    banner:
      'https://awoiaf.westeros.org/images/thumb/5/5b/House_Greyjoy.svg/1200px-House_Greyjoy.svg.png',
  },
  {
    name: 'Davos Seaworth',
    house: 'Seaworth',
    age: 37,
    picture:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/0/00/DAVOSINFOBOXBELLS.PNG.png/revision/latest/top-crop/width/360/height/450?cb=20200518042045&path-prefix=es',
    banner:
      'https://awoiaf.westeros.org/images/thumb/6/61/House_Seaworth.svg/1200px-House_Seaworth.svg.png',
  },
  {
    name: 'Cersei Lannister',
    house: 'Lannister',
    age: 30,
    picture:
      'https://vignette.wikia.nocookie.net/juego-detronos-fanon/images/0/06/D83429bddc3666e1584276658ac7d215.png/revision/latest?cb=20190713200100&path-prefix=es',
    banner:
      'https://static.wikia.nocookie.net/iceandfire/images/8/88/House_Lannister.png/revision/latest?cb=20180126180303',
  },
  {
    name: 'Tyrion Lannister',
    house: 'Lannister',
    age: 24,
    picture:
      'https://vignette.wikia.nocookie.net/juego-detronos-fanon/images/4/46/42tgru65.jpg/revision/latest?cb=20190715005327&path-prefix=es',
    banner:
      'https://static.wikia.nocookie.net/iceandfire/images/8/88/House_Lannister.png/revision/latest?cb=20180126180303',
  },
  {
    name: 'Jaime Lannister',
    house: 'Lannister',
    age: 31,
    picture:
      'https://vignette.wikia.nocookie.net/gameofthronesfanon/images/1/1e/Jaime_Lannister.jpg/revision/latest?cb=20181025045714&path-prefix=es',
    banner:
      'https://static.wikia.nocookie.net/iceandfire/images/8/88/House_Lannister.png/revision/latest?cb=20180126180303',
  },
];
```
