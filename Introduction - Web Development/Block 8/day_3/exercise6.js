    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const averageNote = () => {
  let noteAverage = notas.map(array => {
    return array.reduce((store, value) => {
      return store + value;
    }, 0);
  });
  return noteAverage.map(element => element/5);
};

function studentAverage() {
  const students = alunos.map((aluno, index) => (
    {
      name: aluno,
      average: averageNote()[index],
    }
  ));
  return students;
}
console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// assert.deepStrictEqual(studentAverage(), expected);
