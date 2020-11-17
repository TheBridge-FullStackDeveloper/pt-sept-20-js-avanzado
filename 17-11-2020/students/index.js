console.log('Existo! 🦄');

// Traer la lista de estudiantes, y después analizar que bootcamps tienen y traernos esos bootcamps de la API
// La lista de estudiantes irá en un array students
// Los bootcamps irán en un array bootcamps
let students = [];
let bootcamps = [];

const baseUrl = 'http://localhost:3000/api';

const studentsUrl = `${baseUrl}/students`;
const bootcampUrl = `${baseUrl}/bootcamp`;

// Función que busca un solo bootcamp dado su nombre
const fetchBootcamp = async (bootcampName) => {
  const bootcampRes = await fetch(`${bootcampUrl}/${bootcampName}`);
  const bootcampData = await bootcampRes.json();

  return bootcampData;
};

// Añadimos el async a la función para usar async/await
const getStudentsAndBootcamps = async () => {
  try {
    const studentsRes = await fetch(studentsUrl);
    const studentsData = await studentsRes.json();

    // Guardamos los students de la API en el array students
    students = [...students, ...studentsData.students];

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

    // Esto solo sirve para pedirlos de uno en uno, y necesitamos una forma de crear muchas requests
    // const bootcampData = await fetchBootcamp(uniqueBootcamps[0]);

    // Convierto el array de nombres en un array de Promesas al invocar fetchBoocamp
    const bootcampPromises = uniqueBootcamps.map((bootcamp) =>
      fetchBootcamp(bootcamp)
    );
    // Resolvemos todas las promesas del array a la vez...
    const bootcampsData = await Promise.all(bootcampPromises);

    // Formateo la información de cada bootcamp para tenerlo en un objeto simple { name: '', id: '' }
    const formattedBootcamps = bootcampsData.map(
      (bootcampData) => bootcampData.bootcamp
    );
    // Añado el nuevo bootcamp al array global bootcamps
    bootcamps = [...bootcamps, ...formattedBootcamps];

    // Mostramos los datos finales
    console.log({ students, bootcamps });
  } catch (err) {
    console.log(err);
  }
};

getStudentsAndBootcamps();
