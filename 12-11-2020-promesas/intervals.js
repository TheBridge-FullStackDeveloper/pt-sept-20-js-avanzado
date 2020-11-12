let toggle = false;
let counter = 0;

const interval = setInterval(() => {
  console.log(`El toggle está en ${toggle}`);
  toggle = !toggle;
  counter += 1;
  console.log(`El toggle ha cambiado a ${toggle}`);

  if (counter >= 10) {
    clearInterval(interval);
  }
}, 1000);

console.log('Ha terminado el interval');
