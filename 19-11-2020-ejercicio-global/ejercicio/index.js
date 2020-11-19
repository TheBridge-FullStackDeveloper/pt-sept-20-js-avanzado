const createCharacterCardContent = (character) => `
    <div class="header flex-center mb-1">
      <h2 class="title">${character.name}</h2>
      <h3 class="status regular">${character.status}</h3>
    </div>

    <img
      src="${character.image}"
      alt="${character.name}"
      class="picture mb-1"
    />

    <div class="info flex-center mb-1">
      <h3 class="species regular">${character.species}</h3>
      <h3 class="gender regular">${character.gender}</h3>
    </div>

    <h3 class="location">${character.location.name}</h3>
`;

const createCharacterCard = (character) => {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.innerHTML = createCharacterCardContent(character);

  return cardDiv;
};

const drawCards = (element, characters) => {
  characters.forEach((character) =>
    element.append(createCharacterCard(character))
  );
};

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

const cardsContainer = document.querySelector('#cards');
drawCards(cardsContainer, characters);
