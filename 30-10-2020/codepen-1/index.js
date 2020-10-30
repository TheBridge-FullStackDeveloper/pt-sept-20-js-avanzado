// Valor global que cambiaremos poco a poco
let currency = 'usd'
let filterBrand = false
const dollarToEur = 0.86
const dollarToMad = 9.23

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
  let coin = ''
  if (currency === 'eur') {
    coin = '€'
  } else if (currency === 'usd') {
    coin = '$'
  } else if (currency === 'mad') {
    coin = 'درهم'
  }
  
  // Busco el contenedor con todos los zapatos.
  const shoesContainer = document.querySelector('#shoes');
  shoesContainer.innerHTML = '';
  shoes.forEach((shoe) => {
    // Creo un div como el de baseCard
    const shoeDiv = document.createElement('div'); // <div></div>
    // Le añado la clase .card
    shoeDiv.className = 'card'; // <div class="card"></div>

    let priceChangedByCurrency = shoe.price;
    if (currency === 'eur') {
      priceChangedByCurrency = shoe.price * dollarToEur;
    } else if (currency === 'mad') {
      priceChangedByCurrency = shoe.price * dollarToMad;
    }
    
    let discountText = '';
    if (shoe.discount) {
      discountText = `<h3 class="discount">¡Ofertón! -${shoe.discount}% => ${
       (priceChangedByCurrency * (1 - shoe.discount / 100)).toFixed(2)
      }${coin}</h3>`;
    }

    // Le meto al <div> el contenido de la carta con la información del zapato
    shoeDiv.innerHTML = `
       ${discountText}
       <h3>${shoe.brand} - ${priceChangedByCurrency.toFixed(2)}${coin}</h3>
       <p>${shoe.name}</p>
       <img src="${shoe.picture}" alt="${shoe.name}">
    `;

    // Añado este nuevo <div> como hijo del contenedor
    shoesContainer.append(shoeDiv);
  });
}

function handleClickBrandButton() {
  filterBrand = true;
  const supergaShoes = originalShoes.filter((shoe) => {
    return shoe.brand === 'SUPERGA';
  });

  paintShoes(supergaShoes);
}
const brandButton = document.querySelector('#brand-button');
brandButton.addEventListener('click', handleClickBrandButton);

// Función para mostrar todos los zapatos de nuevo
function handleClickResetButton() {
  filterBrand = false;
  paintShoes(originalShoes);
}
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', handleClickResetButton);

// Buscamos el <select> y decidimos cual de sus options está seleccionada
const currencySelect = document.querySelector('#currency')
for (let i = 0; i < currencySelect.options.length; i++) {
  const option = currencySelect.options[i]
  if (option.value === currency) {
    option.selected = true;
  } else {
    option.selected = false;
  }
}

function handleChangeSelect(event) {
  // Cuando el select cambie, currency adquirirá el nuevo valor del select
  currency = event.target.value // eur, usd, ...
  
  if (filterBrand) {
    handleClickBrandButton()
  } else {
    handleClickResetButton()
  }
}
currencySelect.addEventListener('change', handleChangeSelect)

// Invoco paintShoes para pintar los zapatos
paintShoes(originalShoes);
