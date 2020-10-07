const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

function flatten() {
  return arrays.reduce((store, value) => {
    for (let index = 0; index < value.length; index += 1) store.push(value[index]);
    return store;
  }, []);
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);