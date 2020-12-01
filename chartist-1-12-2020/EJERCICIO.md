# Ejercicio

Crearemos un HTML que tenga como título `h1` el texto `SWAPI GRAPHS`.

Haz dos funciones que, tras hacer una petición a la API que te daremos a continuación, pinte las gráficas siguientes:

1. Pediremos las películas de Star Wars (solamente la primera página) y pintaremos una gráfica de líneas en la que podamos ver en el **eje Y** los años de publicación y en el **eje X** el nombre de cada película.

```
API ENDPOINT = https://swapi.dev/api/films/
```

2. Pediremos los personajes de Star Wars (solamente la primera página) y pintaremos una gráfica de barras en la que podamos ver en el **eje X** el nombre del personaje y en el **eje Y** el número de películas en las que ha participado.

```
API ENDPOINT = https://swapi.dev/api/people/
```

Para pintar todo esto usaremos `Chartist` tal y como vimos en clase.
Link a la docu: [Chartist](https://gionkunz.github.io/chartist-js/api-documentation.html)
