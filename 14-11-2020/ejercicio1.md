# Ejercicio 1

1. Repaso de Class

Vamos a crear una clase llamada Student que tenga dos campos, `name` y `techs`.

Cuando instanciemos la clase, le vamos a pasar como argumentos un string para `name` y un array de strings para `techs`.

Vamos a crear un método `getTechs` que responda con `${nombreDeEstudiante} sabe las tecnologías: ${techsSeparadasPorComas}`.

2. Repaso de Object.methods

Crea un método `addLevel` que recorra todas las tecnologías que tiene nuestro estudiante y las añada a un objeto, reciba un argumento con tantos elementos como tecnologías `['html', 'css', 'js']` (el argumento será `[9, 7, 8]`). Debemos acabar teniendo una propiedad `this.levels` en nuestra clase que sea:

```
  {
    html: 9,
    css: 7,
    js: 8
  }
```

Y por último, haremos un método `getLevels` que nos devuelva un array con los niveles de cada tecnologías `[9, 7, 8]` que tiene nuestra clase después de añadir niveles de conocimiento.
