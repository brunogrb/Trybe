## Jest - Asynchronous Tests

1. Write a test that calls the callback of an uppercase function, which turns the letters of a word into uppercase letters. Remember to be careful of false positives in asynchronous tests.

2. Using the Promise syntax, run a test that checks the result of the getUserName function for the case where the user is found, and also a test for the case where the user is not found.
  * Tip: See the false data used in the database, available in the users variable, to know which IDs exist.

3. Rewrite the test from the previous exercise, this time using async / await syntax.
  * Tip: Use try / catch in case of an error.

4. The code below searches a user's GitHub, according to the URL, their repositories, and returns a list as a result. Given the URL 'https://api.github.com/users/tryber/repos', do a test that verifies that the' sd-01-week4-5-project-todo-list 'and' sd-01- week4-5-project-meme-generator 'are on that list.

5. For this exercise, try to guess the output of the console.log from the tests below without running them, and see if you have a good understanding of how beforeEach and afterEach work.
  * After writing what you think the result will be, run the tests and see if you got it right.
<!--
  beforeEach(() => console.log('1 - beforeEach'));
  afterEach(() => console.log('1 - afterEach'));

  test('', () => console.log('1 - test'));

  describe('Scoped / Nested block', () => {
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));

    test('', () => console.log('2 - test'));
  });
-->

6. In this exercise, you will create functions similar to the code below - the same one that was used as an example on the promise tests.
  1. Add a feature to search for the animal's name - create a function that should pass the test below.
  2. Add a new feature to search for the age of the animals. The return should be an array of objects, but if you can't find any, return an error message. Write down both the function and your test.
<!--
  const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];

  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        }

        return reject({ error: 'Não possui esse tipo de animal.' });
      }, 100);
    })
  );

  const getListAnimals = (type) => (
    findAnimalsByType(type).then(list => list)
);
-->
