const positions = [
  [500, 500],
  [550, 520],
  [530, 610],
  [470, 700],
  [435, 680],
];

const objPositions = positions.reduce(
  (acc, next, index) => {
    const [posX, posY] = next;

    return {
      ...acc,
      positionIndexes: [...acc.positionIndexes, index],
      [index]: {
        x: posX,
        y: posY,
      },
    };
  },
  {
    positionIndexes: [],
  }
);

console.log(objPositions);

// Queremos transformar un array de coordenadas al objeto final de posiciones [x,y]:
// const objPositions = {
//   positionIndexes: [0, 1, 2, 3],
//   0: {
//     x: 500,
//     y: 500,
//   },
//   1: {
//     x: 550,
//     y: 520
//   },
// }

// EJERCICIO
const push = (arr = [], value) => {
  const newArr = [...arr, value];
  return newArr;
};

const person = {
  name: 'Sol',
  fruits: [],
};

const fruits = ['apple', 'banana', 'grapes', 'kiwi'];

const copyArrayInObj = (obj, field, arr) =>
  arr.reduce((acc, next) => {
    return {
      ...acc,
      [field]: push(acc[field], next),
    };
  }, obj);

const personWithFruits = copyArrayInObj(person, 'fruits', fruits);
console.log(personWithFruits);

const techStack = ['JavaScript', 'React', 'Node', 'HTML', 'CSS'];
const personWithTechStack = copyArrayInObj(
  personWithFruits,
  'techs',
  techStack
);
console.log(personWithTechStack);

copyArrayInObj(copyArrayInObj(person, 'fruits', fruits), 'tech', techStack);
