// Métodos que MUTAN ARRAYS
const lotrCharacters = ['Gandalf'];

// Empujo un elemento AL FINAL del array.
lotrCharacters.push('Frodo');
console.log(lotrCharacters);

// Saco el ULTIMO ELEMENTO del array
lotrCharacters.pop();
console.log(lotrCharacters);

// Empujo un elemento AL PRINCIPIO del array
lotrCharacters.unshift('Legolas');
console.log(lotrCharacters);

// Saco el PRIMER ELEMENTO del array
lotrCharacters.shift();
console.log(lotrCharacters);

// Ejercicio de grupo
const fellowshipCharacters = [
  {
    name: 'Smeagle',
    isInFellowship: false,
  },
  {
    name: 'Frodo',
    isInFellowship: true,
  },
  {
    name: 'Aragorn',
    isInFellowship: true,
  },
  {
    name: 'Gimli',
    isInFellowship: true,
  },
  {
    name: 'Sauron',
    isInFellowship: false,
  },
];

fellowshipCharacters.shift();
fellowshipCharacters.pop();
// Comprobamos que hemos eliminado los que no están en la Compañía
console.log(fellowshipCharacters[0]);

// Con REVERSE le podemos dar la vuelta a un array
fellowshipCharacters.reverse();
console.log(fellowshipCharacters[0]);

// Con SPLICE podemos quitarle un trozo a un array dado un índice de partida
const characterNames = [
  'Legolas',
  'Smeagle',
  'Frodo',
  'Aragorn',
  'Gimli',
  'Sauron',
];

// A partir de Frodo (inclusive) saco los 3 elementos que siguen
const theFellowship = characterNames.splice(2, 3);
// Guarda lo que sacamos del array en una nueva constante
console.log(theFellowship);
// En el array original se quedan los QUE NO HE ELIMINADO
console.log(characterNames);

// Saco a legolas del array en el que queda y lo meto en theFellowship
const legolas = characterNames.shift();
console.log(characterNames);
theFellowship.push(legolas);
console.log(theFellowship);

const molpe = {
  hobbies: ['coding', 'eating'],
  addHobbie: function (newHobbie) {
    this.hobbies.push(newHobbie);
  },
  forgetLastHobbie: function () {
    this.hobbies.pop();
  },
  deleteHobbiesFrom: function (hobbie) {
    // Buscar la posición (index) del hobbie que he recibido
    let index = 0;
    this.hobbies.forEach((oldHobbie, i) => {
      if (oldHobbie === hobbie) {
        index = i;
      }
    });

    // Hacer un .splice y quedarme los hobbies a partir de esa posición (index)
    this.hobbies.splice(index);
  },
};

console.log(molpe.hobbies);
molpe.addHobbie('tennis');
console.log(molpe.hobbies);
molpe.forgetLastHobbie();
console.log(molpe.hobbies);
molpe.addHobbie('drinking beer');
console.log(molpe.hobbies);
molpe.addHobbie('videogames');
console.log(molpe.hobbies);
molpe.addHobbie('more videogames');
console.log(molpe.hobbies);

molpe.deleteHobbiesFrom('drinking beer');
console.log(molpe.hobbies);
