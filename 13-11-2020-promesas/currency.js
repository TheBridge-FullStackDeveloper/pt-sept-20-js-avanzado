// Hemos instalado node-fetch en REPLIT porque corre en un servidor de Node y fetch es exclusivo de navegadores
const fetch = require('node-fetch');

// Sacar nuestra API_KEY entrando a la web y logeando con GITHUB
// https://billing.currencyfreaks.com/login
const apiUrl =
  'https://api.currencyfreaks.com/latest?apikey=TU_API_KEY';

// Dadas dos divisas, una de pago y una de devolución. Vamos a cambiar a nuestros usuario la cantidad (tercer argumento) que toque pagar.
const payExchange = (originalCurrency, endCurrency, amount) => {
  fetch(apiUrl, { method: 'GET' })
    .then((res) => res.json())
    .then((result) => {
      // El resultado de la respuesta de la API es result
      // console.log(result)

      // Sacamos los cambios de divisa del resultado de la API
      const baseValue = result.rates[result.base];
      const ogCurrencyValue = result.rates[originalCurrency];
      const endCurrencyValue = result.rates[endCurrency];

      console.log('Nuestros cambios de divisa son:', {
        baseValue,
        ogCurrencyValue,
        endCurrencyValue,
      });

      // Calculamos la cantidad en la moneda base
      const baseAmount = (amount * baseValue) / ogCurrencyValue;
      console.log(`Tenemos ${baseAmount} como ${result.base}`);

      const endAmount = (baseAmount * endCurrencyValue) / baseValue;
      console.log(`Tenemos ${endAmount} como ${endCurrency}`);

      // Hacemos lo que queramos con endAmount aquí...
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
    });
};

const exchange = payExchange('EUR', 'GBP', 50);
// El exchange es undefined porque tenemos la promesa en proceso y payExchange no ha terminado.
console.log(`El cambio final es ${exchange}`);
