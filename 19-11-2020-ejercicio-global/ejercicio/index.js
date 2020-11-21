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
    
    <div class="text-right">
      <a class="link link-button" href="character.html?id=${character.id}">+</a>
    </div>
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

// Código de funcionalidad 🚀
let characterURL = 'https://rickandmortyapi.com/api/character';

const fetchCharacters = async () => {
  const response = await fetch(characterURL);
  const data = await response.json();

  // Añado el link de la siguiente página a mi variable global characterURL
  characterURL = data.info.next;

  return data.results;
};

const formatCharacters = (data) =>
  data.map((character) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    location: {
      name: character.location.name,
    },
    image: character.image,
  }));

const getCharacters = async () => {
  const data = await fetchCharacters();
  return formatCharacters(data);
};

const loadCharacters = async () => {
  const characters = await getCharacters();
  const cardsContainer = document.querySelector('#cards');
  drawCards(cardsContainer, characters);
};

const start = () => {
  loadCharacters();
}

start();

const handleLoadMoreCharacters = () => {
  loadCharacters();
};

const loadMoreButton = document.querySelector('#load-more');
loadMoreButton.addEventListener('click', handleLoadMoreCharacters);
