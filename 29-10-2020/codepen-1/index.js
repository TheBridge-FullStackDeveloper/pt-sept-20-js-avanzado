const originalShoes = [
  {
    brand: 'SUPERGA',
    price: 70,
    picture:
      'https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw5785dd89/images/hi-res/P_762081001TL.jpg?sw=570&sh=855&sm=fit',
    name: 'zapatilla negra',
  },
  {
    brand: 'SUPERGA',
    price: 70,
    picture:
      'https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw6e3a867d/images/hi-res/P_762082951TL.jpg?sw=570&sh=855&sm=fit',
    name: 'zapatilla beige',
    discount: 20,
  },
  {
    brand: 'SPRINGFIELD',
    price: 30,
    picture:
      'https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw278d0460/images/hi-res/P_988755568TL.jpg?sw=570&sh=855&sm=fit',
    name: 'zapatilla retro',
  },
  {
    brand: 'SPRINGFIELD',
    price: 25,
    picture:
      'https://myspringfield.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-spf-master-catalog/default/dw6b54fbaf/images/hi-res/P_988764497TL.jpg?sw=570&sh=855&sm=fit',
    name: 'zapatilla picados',
  },
];

// const baseCard = `
//     <div class="card">
//      <h3>BRAND - PRICE</h3>
//      <p>NAME</p>
//      <img src="PICTURE" alt="NAME">
//    </div>
// `
function paintShoes(shoes) {
  // Busco el contenedor con todos los zapatos.
  const shoesContainer = document.querySelector('#shoes');
  shoesContainer.innerHTML = '';
  shoes.forEach((shoe) => {
    // Creo un div como el de baseCard
    const shoeDiv = document.createElement('div'); // <div></div>
    // Le añado la clase .card
    shoeDiv.className = 'card'; // <div class="card"></div>

    let discountText = '';
    if (shoe.discount) {
      discountText = `<h3 class="discount">¡Ofertón! -${shoe.discount}% => ${
        shoe.price * (1 - shoe.discount / 100)
      }€</h3>`;
    }

    // Le meto al <div> el contenido de la carta con la información del zapato
    shoeDiv.innerHTML = `
       ${discountText}
       <h3>${shoe.brand} - ${shoe.price}</h3>
       <p>${shoe.name}</p>
       <img src="${shoe.picture}" alt="${shoe.name}">
    `;

    // Añado este nuevo <div> como hijo del contenedor
    shoesContainer.append(shoeDiv);
  });
}

function handleClickBrandButton() {
  const supergaShoes = originalShoes.filter((shoe) => {
    return shoe.brand === 'SUPERGA';
  });

  paintShoes(supergaShoes);
}
const brandButton = document.querySelector('#brand-button');
brandButton.addEventListener('click', handleClickBrandButton);

// Función para mostrar todos los zapatos de nuevo
function handleClickResetButton() {
  paintShoes(originalShoes);
}
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', handleClickResetButton);

// Invoco paintShoes para pintar los zapatos
paintShoes(originalShoes);
