const restaurant = {};

console.log(restaurant);

restaurant.food = 'burger';

console.log(restaurant);

restaurant['name'] = 'goiko';

console.log(restaurant);

const form = {
  client: 'Pepe',
  order: 'Kevin Bacon',
  review: 'Se comen hamburguesas muy grandes',
};

Object.keys(form).forEach((key, index) => {
  const value = form[key];
  restaurant[key] = value;
  // Esto es parecido a lo que hicimos antes ⬇️
  // restaurant['name'] = 'goiko'
  // restaurant.food = 'burger'
});

console.log(restaurant);
