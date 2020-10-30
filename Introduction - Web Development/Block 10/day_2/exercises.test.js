const uppercase = require('./exercise1');
const getUserName = require('./exercise2');
const getRepos = require('./exercise4');

// Test exercise 1
it('returns a word in capital letters', (done) => {
  uppercase('bruno', (wordToUppercase) => {
    expect(wordToUppercase).toBe('BRUNO');
    done();
  });
});

// Test exercise 2
describe('test if the ID exist or not', () => {
  it('should exist the ID "5"', () => {
    expect.assertions(1);
    return getUserName(5).then(name => expect(name).toEqual('Paul'));
  });
  it('should not exist the ID "1"', () => {
    expect.assertions(1);
    return getUserName(1).catch(failure => expect(failure).toEqual({ error: 'User with 1 not found.' }))
  });
});

// Test exercise 3

// Test exercise 4
describe('test to cointain some repositories in the URL', () => {
  it('should verifies that the "sd-01-week4-5-project-todo-list" repo is not on the array', () => {
    expect.assertions(1);
    return getRepos('https://api.github.com/users/tryber/repos').then(response => expect(response).not.toContain('sd-01-week4-5-project-todo-list'));
  });
  it('should verifies that the "sd-01- week4-5-project-meme-generator" repo is not on the array', () => {
    expect.assertions(1);
    return getRepos('https://api.github.com/users/tryber/repos').then(response => expect(response).not.toContain('sd-01- week4-5-project-meme-generator'));
  });
});

// Test exercise 5

// Test exercise 6