function runAsyncCode() {
  console.log('2 - Empezando la función');

  const zeroTimeout = setTimeout(() => {
    console.log('¡Timeout de 0 segundos!');
  }, 0);

  setTimeout(() => {
    console.log('8 - ¡Timeout de 1 segundo!');
  }, 1000);

  new Promise((resolve, reject) => {
    console.log('3 - ¡Lanzando la promesa!');

    setTimeout(() => {
      console.log('6 - ¡Resolviendo la promesa!');
      resolve();
    }, 500);
  })
    .then(() => {
      console.log('7 - ¡La promesa se ha resuelto! 🎉');
      clearTimeout();
    })
    .catch((err) => {
      console.log('Ha ocurrido un error 😭');
    });

  clearTimeout(zeroTimeout);
  console.log('4 - Terminando la función');
}

console.log('1 - Vamos a lanzar la función');
runAsyncCode();
console.log('5 - La función se ha lanzado');
