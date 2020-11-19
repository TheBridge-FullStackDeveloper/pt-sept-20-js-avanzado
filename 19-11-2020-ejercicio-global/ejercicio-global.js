// Usar esta información para pintar en HTML y CSS una carta de personaje
const character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  location: {
    name: 'Earth (Replacement Dimension)',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

// Personajes adicionales para probar que funciona correctamente
const secondCharacter = {
  id: 2,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  location: {
    name: 'Earth (Replacement Dimension)',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};

const thirdCharacter = {
  id: 3,
  name: 'Summer Smith',
  status: 'Alive',
  species: 'Human',
  gender: 'Female',
  location: {
    name: 'Earth (Replacement Dimension)',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
};

// Ahora creamos un array con los tres personajes y vamos a crear en nuestro index.html un div con id="cards".
// Recorre el array de personajes para inyectar cada carta dentro del div.
const characters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: {
      name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: {
      name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Female',
    location: {
      name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];

// Utilizaremos la función getCharacter que devolverá un array con los personajes con el formato que necesitamos utilizar.
// Partiremos del formato que los personajes tienen en la API.

function getCharacters() {
  const data = {
    info: {
      count: 671,
      pages: 34,
      next: 'https://rickandmortyapi.com/api/character?page=2',
      prev: null,
    },
    results: [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/13',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/17',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/24',
          'https://rickandmortyapi.com/api/episode/25',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/27',
          'https://rickandmortyapi.com/api/episode/28',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31',
          'https://rickandmortyapi.com/api/episode/32',
          'https://rickandmortyapi.com/api/episode/33',
          'https://rickandmortyapi.com/api/episode/34',
          'https://rickandmortyapi.com/api/episode/35',
          'https://rickandmortyapi.com/api/episode/36',
          'https://rickandmortyapi.com/api/episode/37',
          'https://rickandmortyapi.com/api/episode/38',
          'https://rickandmortyapi.com/api/episode/39',
          'https://rickandmortyapi.com/api/episode/40',
          'https://rickandmortyapi.com/api/episode/41',
        ],
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/13',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/17',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/24',
          'https://rickandmortyapi.com/api/episode/25',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/27',
          'https://rickandmortyapi.com/api/episode/28',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31',
          'https://rickandmortyapi.com/api/episode/32',
          'https://rickandmortyapi.com/api/episode/33',
          'https://rickandmortyapi.com/api/episode/34',
          'https://rickandmortyapi.com/api/episode/35',
          'https://rickandmortyapi.com/api/episode/36',
          'https://rickandmortyapi.com/api/episode/37',
          'https://rickandmortyapi.com/api/episode/38',
          'https://rickandmortyapi.com/api/episode/39',
          'https://rickandmortyapi.com/api/episode/40',
          'https://rickandmortyapi.com/api/episode/41',
        ],
        url: 'https://rickandmortyapi.com/api/character/2',
        created: '2017-11-04T18:50:21.651Z',
      },
      {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/17',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/24',
          'https://rickandmortyapi.com/api/episode/25',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/27',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31',
          'https://rickandmortyapi.com/api/episode/32',
          'https://rickandmortyapi.com/api/episode/33',
          'https://rickandmortyapi.com/api/episode/34',
          'https://rickandmortyapi.com/api/episode/35',
          'https://rickandmortyapi.com/api/episode/36',
          'https://rickandmortyapi.com/api/episode/38',
          'https://rickandmortyapi.com/api/episode/39',
          'https://rickandmortyapi.com/api/episode/40',
          'https://rickandmortyapi.com/api/episode/41',
        ],
        url: 'https://rickandmortyapi.com/api/character/3',
        created: '2017-11-04T19:09:56.428Z',
      },
      {
        id: 4,
        name: 'Beth Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/24',
          'https://rickandmortyapi.com/api/episode/25',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/27',
          'https://rickandmortyapi.com/api/episode/28',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31',
          'https://rickandmortyapi.com/api/episode/32',
          'https://rickandmortyapi.com/api/episode/33',
          'https://rickandmortyapi.com/api/episode/34',
          'https://rickandmortyapi.com/api/episode/35',
          'https://rickandmortyapi.com/api/episode/36',
          'https://rickandmortyapi.com/api/episode/38',
          'https://rickandmortyapi.com/api/episode/39',
          'https://rickandmortyapi.com/api/episode/40',
          'https://rickandmortyapi.com/api/episode/41',
        ],
        url: 'https://rickandmortyapi.com/api/character/4',
        created: '2017-11-04T19:22:43.665Z',
      },
      {
        id: 5,
        name: 'Jerry Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/13',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31',
          'https://rickandmortyapi.com/api/episode/32',
          'https://rickandmortyapi.com/api/episode/33',
          'https://rickandmortyapi.com/api/episode/35',
          'https://rickandmortyapi.com/api/episode/36',
          'https://rickandmortyapi.com/api/episode/38',
          'https://rickandmortyapi.com/api/episode/39',
          'https://rickandmortyapi.com/api/episode/40',
          'https://rickandmortyapi.com/api/episode/41',
        ],
        url: 'https://rickandmortyapi.com/api/character/5',
        created: '2017-11-04T19:26:56.301Z',
      },
      {
        id: 6,
        name: 'Abadango Cluster Princess',
        status: 'Alive',
        species: 'Alien',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Abadango',
          url: 'https://rickandmortyapi.com/api/location/2',
        },
        location: {
          name: 'Abadango',
          url: 'https://rickandmortyapi.com/api/location/2',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/27'],
        url: 'https://rickandmortyapi.com/api/character/6',
        created: '2017-11-04T19:50:28.250Z',
      },
      {
        id: 7,
        name: 'Abradolf Lincler',
        status: 'unknown',
        species: 'Human',
        type: 'Genetic experiment',
        gender: 'Male',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Testicle Monster Dimension',
          url: 'https://rickandmortyapi.com/api/location/21',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
        ],
        url: 'https://rickandmortyapi.com/api/character/7',
        created: '2017-11-04T19:59:20.523Z',
      },
      {
        id: 8,
        name: 'Adjudicator Rick',
        status: 'Dead',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'unknown',
          url: '',
        },
        location: {
          name: 'Citadel of Ricks',
          url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/28'],
        url: 'https://rickandmortyapi.com/api/character/8',
        created: '2017-11-04T20:03:34.737Z',
      },
      {
        id: 9,
        name: 'Agency Director',
        status: 'Dead',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/24'],
        url: 'https://rickandmortyapi.com/api/character/9',
        created: '2017-11-04T20:06:54.976Z',
      },
      {
        id: 10,
        name: 'Alan Rails',
        status: 'Dead',
        species: 'Human',
        type: 'Superhuman (Ghost trains summoner)',
        gender: 'Male',
        origin: {
          name: 'unknown',
          url: '',
        },
        location: {
          name: "Worldender's lair",
          url: 'https://rickandmortyapi.com/api/location/4',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/25'],
        url: 'https://rickandmortyapi.com/api/character/10',
        created: '2017-11-04T20:19:09.017Z',
      },
    ],
  };

  // Crearemos el array de personajes con el mismo formato que teníamos en characters a partir de data.
  const formattedCharacters = [];
  return formattedCharacters;
}

const characters = getCharacters();
// De aquí para abajo mantenemos lo que teníamos para pintar...
