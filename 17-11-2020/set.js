const availableBootcamps = ['fullstack', 'fullstack'];

console.log('------------------------------');
console.log(availableBootcamps); // ['fullstack', 'fullstack']

const bootcampsSet = new Set(availableBootcamps);
console.log(new Set(availableBootcamps)); // { fullstack }

const nonRepeatedBootcamps = [...bootcampsSet];
console.log(nonRepeatedBootcamps); // ['fullstack']
console.log('------------------------------');
