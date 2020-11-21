const createCharacterCardContent = (character) => `
    <div class="header flex-center mb-1">
      <h2 class="title ellipsis">${character.name}</h2>
      <h3 class="status regular capitalize">${character.status}</h3>
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

    <h3 class="location ellipsis mb-1">${character.location.name}</h3>
`;

const createCharacterCard = (character) => {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card card-big';
  cardDiv.innerHTML = createCharacterCardContent(character);

  return cardDiv;
};

const drawCard = (element, character) => {
  element.append(createCharacterCard(character));
};

const formatCharacter = (character) => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  location: {
    name: character.location.name,
  },
  image: character.image,
});

const getSingleCharacter = async () => {
  const id = new URLSearchParams(window.location.search).get('id');
  const characterURL = `https://rickandmortyapi.com/api/character/${id}`;

  const response = await fetch(characterURL);
  const data = await response.json();

  return data;
};

const start = async () => {
  const characterData = await getSingleCharacter();
  const formattedCharacter = formatCharacter(characterData);

  const container = document.querySelector('#container');
  drawCard(container, formattedCharacter);
};

start();
