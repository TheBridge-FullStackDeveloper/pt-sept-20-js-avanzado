const quiz = {
  questions: [
    '¿De que color es la túnica de Gandalf al final de la trilogía?',
    '¿Cómo se llama el enemigo en el Señor de los Anillos?',
    '¿Cuántos elefantes mata Legolas en la batalla final?',
  ],
  validAnswers: ['blanco', 'sauron', 4],
  userAnswers: ['gris', 'sauron', 4],
  points: 0,
  validateAnswers: function () {
    // Hacemos aquí dentro el punto 3
    this.userAnswers.forEach((answer, index) => {
      if (answer === this.validAnswers[index]) {
        this.points += 3;
      }
    });
  },
  resetQuiz: function () {
    this.points = 0;
    this.userAnswers = [];
  },
};

// 1. Rellena el array con 3 respuestas a tu elección.
// Al menos una debe ser verdadera como en validAnswers.
const answers = ['gris', 'sauron', 4];

// 2. Recorre con un .forEach el array answers y empuja cada respuesta
// dentro de userAnswers
answers.forEach((answer) => {
  quiz.userAnswers.push(answer);
});

console.log(quiz.userAnswers);

// 3. Modifica validateAnswers para que recorra userAnswers, y en caso de que
// la respuesta sea correcta (en validAnswers con el mismo index tiene el mismo valor)
// sumamos 3 puntos a points
quiz.validateAnswers();

// Aquí debe salir tantos puntos como respuestas correctas hemos añadido en answers
console.log(`¡¡Tienes ${quiz.points} puntos!!`);

// RESETEAMOS LOS PUNTOS Y VACIAMOS LAS PREGUNTAS
quiz.resetQuiz();

// 4. Añade una pregunta a tu elección en questions. Añade una respuesta válida para esa
// pregunta en validAnswers. Y repite todo el proceso anterior con una respuesta más.

// Aquí debe salir tantos puntos como respuestas correctas hemos añadido en answers
console.log(`¡¡Tienes ${quiz.points} puntos!!`);
