const PEOPLE_URL = 'https://swapi.dev/api/people/';

const drawPeopleBarChart = (selector, data) => {
  new Chartist.Bar(selector, data);
};

const drawPeoplePieChart = (selector, data) => {
  new Chartist.Pie(selector, data, {
    startAngle: 270,
    total: 76,
    donut: true,
    donutWidth: 120,
    // labelDirection: 'explode',
    // labelOffset: 50
    labelPosition: 'outside',
    labelOffset: 80,
    chartPadding: 40,
  });
};

const getPeople = async () => {
  const apiData = await fetch(PEOPLE_URL).then((res) => res.json());

  const { results } = apiData;
  const formattedPeople = results.map(({ name, films }) => ({
    name,
    films: films.length,
  }));

  const orderedPeople = formattedPeople.sort((a, b) => a.films - b.films);

  const peopleNames = orderedPeople.map((person) => person.name);
  const peopleFilms = orderedPeople.map((person) => person.films);

  const data = {
    labels: peopleNames,
    series: [peopleFilms],
  };
  const selector = '#people-chart';
  drawPeopleBarChart(selector, data);

  const pieData = {
    labels: peopleNames,
    series: peopleFilms,
  };
  const pieSelector = '#pie-chart';
  drawPeoplePieChart(pieSelector, pieData);
};

getPeople();
