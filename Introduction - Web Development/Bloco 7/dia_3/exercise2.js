const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const array = [1, 2, 3, 4];

assert.deepStrictEqual(myRemove(array, 3),[1, 2, 4]);

assert.notDeepStrictEqual(myRemove(array, 3),array);

assert.deepStrictEqual(array, [1, 2, 3, 4]);

assert.deepStrictEqual(myRemove(array, 5), [1, 2, 3, 4]);