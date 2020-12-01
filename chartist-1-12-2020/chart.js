// Pintamos una gráfica de líneas con los horarios por curso
const selector = '#chart';

const hoursData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  series: [
    [0, 3.5, 0, 3.5, 0, 7.5],
    // Podemos añadir tantas series como queramos
    // Se les añadirá color automáticamente
    [0, 3.5, 0, 3.5, 3.5, 7.5],
    [4, 4, 6, 4, 6, 0],
  ],
};

const options = {
  showPoint: false, // Por defecto: true | Muestra los puntos de la gráfica
  lineSmooth: false, // Por defecto: true | Hace curvas en la unión entre puntos
  axisX: {
    showGrid: true, // Por defecto: true | Muestra los grids que se apoyan sobre el eje
    showLabel: true, // Por defecto: true | Muestra las etiquetas de un eje
  },
  axisY: {
    scaleMinSpace: 20, // Por defecto: 20 | Espacio mínimo de separación entre pasos del eje
    offset: 30, // Por defecto: 40 | Separación de la gráfica con respecto al eje
    labelInterpolationFnc: (value) => `${value}h.`, // Función para modificar los labels de los ejes
  },
};

new Chartist.Line(selector, hoursData, options);
