console.log('Existo! 🦄');

// Traer la lista de estudiantes, y después analizar que bootcamps tienen y traernos esos bootcamps de la API
// La lista de estudiantes irá en un array students
// Los bootcamps irán en un array bootcamps
let students = [];
let bootcamps = [];

const baseUrl = 'http://localhost:3000/api';

const studentsUrl = `${baseUrl}/students`;
const bootcampUrl = `${baseUrl}/bootcamp`;

const getStudents = () => {
  fetch(studentsUrl)
    .then((res) => res.json())
    .then((data) => {
      // Guardamos los students de la API en el array students
      students = [...students, ...data.students];

      // Sacamos los bootcamps de todos los estudiantes (inclusive duplicados)
      const availableBootcamps = students.map((student) => student.bootcamp);

      // Discúlpanos Fran pero vamos a hacer esto de forma imperativa 🙏
      // Limpiamos los duplicados y hacemos un array de únicos
      const uniqueBootcamps = [];
      availableBootcamps.forEach((bootcamp) => {
        if (!uniqueBootcamps.includes(bootcamp)) {
          uniqueBootcamps.push(bootcamp);
        }
      });

      console.log(uniqueBootcamps);
      fetch(`${bootcampUrl}/${uniqueBootcamps[0]}`)
        .then((res) => res.json())
        .then((bootcampData) => {
          // Añado el nuevo bootcamp al array global bootcamps
          bootcamps = [...bootcamps, bootcampData.bootcamp];

          // Mostramos los datos finales
          console.log({ students, bootcamps });
        });
    });
};

getStudents();
