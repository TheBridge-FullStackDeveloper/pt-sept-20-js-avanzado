# Ejercicio

1. Crea un par de selects. Uno con el id `ogCurrency` y otro con el id `endCurrency`.

2. Crea un input de tipo `number` con id `curency` donde introduzcas la cantidad a cambiar.

3. Crea un botón con id `exchange` que al ser clickado, cambie un `h3` para que diga `Tu cambio de ${currency} ${ogCurrency} son ${cambioDeMoneda} ${endCurrency}`. Haciendo el cambio de moneda correcto.

**Ejemplo**

```
ogCurrency => EUR
endCurrency => GBP
amount => 50

Tu cambio de 50 EUR son X GPB
```

Para resolver el ejercicio vamos a usar la API de `currencyfreaks` que tenemos en el archivo `currency.js` y consumiremos con `fetch`.

Como recomendación, intenta resolver el ejercicio primero SIN usar las promesas (el fetch) simulando la respuesta de la API con un objeto falso, para no consumir innecesariamente las peticiones.

```
const mockResult = {
  base: 'USD',
  rates: {
    USD: 1,
    EUR: 0.81,
    GBP: 0.93
  }
}
```
