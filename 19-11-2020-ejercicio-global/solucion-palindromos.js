function isPalindrome(sentence) {
  // 3. Mejoro la función para soportar strings con espacios
  const splitSentence = sentence.toLowerCase().split(' ');
  const word = splitSentence.join('');
  // 'anita lava latina' => ['anita', 'lava', 'latina']
  // ['anita', 'lava', 'latina'] => 'anitalavalatina'

  // 3.1. Alternativa con replace y una regex
  // Cambio todo lo que NO sean letras y números por ''
  // const word = sentence.replace(/[^A-Z0-9]/gi, '')

  // 1. Darle la vuelta a word
  // 1.1. Hago split en word para separar las letras...
  const splitWord = word.split(''); // ['k', 'a', 'y', 'a', 'k']
  // 1.2. Doy la vuelta al array de letras
  const reversedWord = splitWord.reverse();
  // 1.3 Convierto el array a un string
  const joinWord = reversedWord.join('');

  // 2. Comparo word dado la vuelta con word
  return joinWord === word; // true o false
}

console.log('---- PALABRAS ----');
console.log(isPalindrome('kayak')); // true
console.log(isPalindrome('kAyaK')); // true
console.log(isPalindrome('nadan')); // true
console.log(isPalindrome('plane')); // false
console.log(isPalindrome('')); // true
console.log('---- FRASES ----');
console.log(isPalindrome('anita lava latina')); // true
console.log(isPalindrome('anita,,,, la_____va!!! latina')); // true
console.log(isPalindrome('a santa at nasa')); // true
console.log(isPalindrome('juan come cereales')); // false

// Probando split...
/* console.log('................')
console.log('kayak'.split(''))
console.log('ka yak'.split(' '))
console.log('kay_a_k'.split('_')) */

// Probando join...
// console.log('................')
// console.log(['k', 'a', '_', 'y', ' ', '', '_', 'a', 'k'].join(''))

// Probando replace...
console.log('................');
console.log('pepe'.replace('p', 'a'));
console.log('pepe'.replace('pe', 'o'));
// Todas las 'p' de forma global independientemente de su casing
console.log('pepe'.replace(/p/gi, 'o'));
console.log('hola_ amigos! que tal!!! '.replace(/[^A-Z0-9]/gi, ''));
