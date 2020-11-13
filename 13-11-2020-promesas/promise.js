console.log('Comenzamos a lanzar la función');

setTimeout(() => {
  console.log('Soy el timeout de 0 segundos');
}, 0);

const interval = setInterval(() => {
  console.log('Soy el intervalo de 100ms');
  clearInterval(interval);
}, 100);

console.log('Acabamos de lanzar la función');

console.log('ANTES DE LA PROMESA');

const myPromise = new Promise((resolve, reject) => {
  console.log('Empezamos la promesa...');
  const name = 'Zineb';
  const upperName = name.toUpperCase();

  console.log('Resolvemos la promesa...');
  resolve(upperName);
});

console.log('DESPUÉS DE LA PROMESA');

myPromise.then((result) => {
  console.log('El resultado de la promesa es:', result);
  console.log('Terminamos la promesa...');
});
