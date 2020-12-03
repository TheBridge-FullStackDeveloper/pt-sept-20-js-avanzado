/**
 * Recibe un string con formato fecha YYYY-mm-DD y devuelve el año de dicha fecha
 * @param {string} dateString
 */
const getYearFromDateString = (dateString) =>
  new Date(dateString).getFullYear();

const drawLineGraph = (labels, series, selector) => {
  const data = {
    labels,
    series,
  };

  new Chartist.Line(selector, data, {
    lineSmooth: Chartist.Interpolation.step(),
  });
};

const FILMS_URL = 'https://swapi.dev/api/films/';
const getFilms = () =>
  fetch(FILMS_URL)
    .then((res) => res.json())
    .then((apiData) => apiData.results);

const formatFilms = (films) =>
  films.map((result) => ({
    title: result.title,
    year: getYearFromDateString(result.release_date),
  }));

const drawFilmsGraph = (films) => {
  const titles = films.map((data) => data.title);
  const publishYears = films.map((data) => data.year);

  drawLineGraph(titles, [publishYears], '#films-chart');
};

const start = () => {
  getFilms().then((films) => drawFilmsGraph(formatFilms(films)));
};

start();
