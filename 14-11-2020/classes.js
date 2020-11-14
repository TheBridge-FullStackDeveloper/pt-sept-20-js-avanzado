class Animal {
  constructor({ legs, species }) {
    this.legs = legs;
    this.species = species;
  }

  getLegs() {
    return this.legs;
  }
}

const animal = new Animal({ legs: 4, species: 'dog' });
console.log(animal);
console.log(animal.getLegs());

// Si quiero que una clase se traiga o tenga las propiedades de otra clase, debo EXTENDER la clase principal. En este ejemplo, la clase Dog extiende los métodos y propiedades de la clase Animal.
class Dog extends Animal {
  constructor({ race, ...props }) {
    // Usando super, paso las propiedades hacia la clase que estoy extendiendo
    super(props);
    this.race = race;
  }
}

const dog = new Dog({ legs: 4, species: 'dog', race: 'pug' });

console.log(dog);
console.log(dog.getLegs());
