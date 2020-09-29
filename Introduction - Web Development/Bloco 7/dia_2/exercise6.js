const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'tarde',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function allLessons() {
  let lessons = {};
  lessons.lesson1 = lesson1;
  lessons.lesson2 = lesson2;
  lessons.lesson3 = lesson3;
  return lessons;
}

function studentsNumbers(object) {
  let sum = 0;
  sum += object.lesson1.numeroEstudantes;
  sum += object.lesson2.numeroEstudantes;
  sum += object.lesson3.numeroEstudantes;
  return sum;
}

const nLessons = allLessons();

console.log(studentsNumbers(nLessons));
