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


function verifyPair(object, keys, value) {
  let check = false;
  for (const key in object) {
    if (key === keys && object[key] === value) {
      check = true;
    }
  }
  return check;
}

console.log(verifyPair(lesson1, 'materia', 'Matemática'));