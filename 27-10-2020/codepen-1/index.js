const listItems = document.querySelectorAll('li.item');

for (let i = 0; i < listItems.length; i++) {
  const listItem = listItems[i];
  const pokemonName = listItem.innerText;
  console.log('El nombre del pokemon es:', pokemonName);
}

// Añado evento al botón
function changeNamesToPikachu() {
  listItems.forEach((listItem) => {
    listItem.innerText = 'Pikachu';
  });
}
const pikachuChangerButton = document.querySelector('#pikachu-changer');
pikachuChangerButton.addEventListener('click', changeNamesToPikachu);
