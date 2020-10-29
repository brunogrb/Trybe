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


// Test exercise 5

// Test exercise 6