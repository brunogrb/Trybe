const uppercase = require('./exercise1');

it(`returns a word in capital letters`, (done) => {
  uppercase('bruno', (word) => {
    expect(word).toBe('BRUNO');
    done();
  });
});