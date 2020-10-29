// Para saber si un string contiene a otro string, usamos el método .includes
// Si se incluye, tengo true, en caso contrario, false
// 'Sol' !== 'sol' 'Sol' === 'Sol'
const isIncluded = 'Nuestra TA es Sol'.includes('Nu');
console.log(isIncluded);

// Sol quiere empezar a trabajar en the_bridge, pero escribe el comando
// con mayúsculas y minúsculas
const solMessage = '!!StArT tHe_BriDGe';
const solMessageLowerCase = solMessage.toLowerCase();
// Transformamos el comando a todo minúsculas
console.log(solMessageLowerCase);

// Comprobamos que ha llamado al bot con !!
const hasCalledBot = solMessageLowerCase.includes('!!');
console.log('¿Has llamado al bot?', hasCalledBot);

if (hasCalledBot) {
  // Comprobamos que quiere empezar a trabajar
  const isStart = solMessageLowerCase.includes('!!start');

  if (isStart) {
    console.log('Sol ha empezado a trabajar!');
  }
}
