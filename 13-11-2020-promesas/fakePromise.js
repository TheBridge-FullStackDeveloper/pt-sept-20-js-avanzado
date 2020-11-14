/**
 * Esta función simula una promesa que tarda tanto tiempo como timeout indique
 * en resolverse, y devuelve a traves de resolve(data) los datos que mandemos
 * en data como segundo argumento siempre que hagamos .then después de invocarla.
 * @param {number} timeout
 * @param {any} data
 * @returns {Promise}
 */
const fakePromise = (timeout, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};

fakePromise(2000, { name: 'pepe' }).then((data) => {
  console.log(data);
});


// Ejemplo con varias formas de usar .then
// fetch('https://onstogrom.es/profile')
const getProfile = () => {
  fakePromise(300, {
    id: 1,
    name: 'Alex',
    surname: 'González',
    height: 182,
    birthdate: '08/13/1980',
    picture: 'https://www.pronto.es/uploads/s1/83/02/68/alex-gonzalez.jpeg',
  })
    // En este caso, los dos .then que tenemos hacen lo mismo, ya que `res` es pasado desde el .then hasta la función `ogUser.setProfile` sin modificarse, y el .then invoca a la función
    // .then((res) => {
    //   ogUser.setProfile(res)
    // })
    .then(ogUser.setProfile)
    // En caso de que tuviésemos que modificar la respuesta de la API antes de pasarla a nuestro código o a una función, no podemos poner la función directamente y tenemos que hacerlo de forma normal.
    // .then(res => {
    //   const formattedRes = res...
    //   ogUser.setProfile(formattedRes)
    // })
    .catch((err) => {
      console.log(err);
    });
};