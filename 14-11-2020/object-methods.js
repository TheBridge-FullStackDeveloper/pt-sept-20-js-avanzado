const person = {
  name: 'pepe',
  surname: 'garcia',
};

/* person.name
person['name']

const key = 'name'
person[key] */

// Con estos métodos sacamos las claves o valores de un objeto en forma de array
const keys = Object.keys(person);
const values = Object.values(person);

console.log(keys);
console.log(values);

// Este método saca un array de arrays (2D) con formato [[clave, valor]]
const entries = Object.entries(person);
console.log(entries);
