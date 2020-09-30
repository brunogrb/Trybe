## JavaScript unit tests

### Practicing testing implementation

You will implement several tests in different contexts in order to consolidate the mechanics and also the way of thinking about tests.
Copy the functions already implemented and develop the tests. Separate functions into files to avoid any problems.

1. The sum (a, b) function returns the sum of parameter a and b
  1. Test if the sum return (4, 5) is 9
  2. Test whether the return of sum (0, 0) is 0
  3. Test if the sum function throws an error when the parameters are 4 and "5" (string 5)
  4. Test if the error message is "parameters must be numbers" when making the sum call (4, "5")

  ---
  const assert = require('assert');

  function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }

    return a + b;
  }

  // implement your tests here

  ---

2. The myRemove (arr, item) function receives an arr array and returns a copy of that array without the item element if it exists in the array
  1. Check that the myRemove call ([1, 2, 3, 4], 3) returns the expected array
  2. Check that the myRemove call ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]
  3. Check that the array passed by parameter has not changed
  4. Check if the myRemove call ([1, 2, 3, 4], 5) returns the expected array

  ---
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

  // implement your tests here
  ---

3. The myRemoveWithoutCopy (arr, item) function receives an arr array and returns the array itself without the item element if it exists in the array
  1. Check that the myRemoveWithoutCopy call ([1, 2, 3, 4], 3) returns the expected array
  2. Check that the myRemoveWithoutCopy call ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]
  3. Make a call to the myRemoveWithoutCopy function and check if the array passed by parameter has changed
  4. Check if the myRemoveWithoutCopy call ([1, 2, 3, 4], 5) returns the expected array

  ---
  const assert = require('assert');

  function myRemoveWithoutCopy(arr, item) {
    for (let i = 0, len = arr.length; i < len; i += 1) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
        len -= 1;
      }
    }

    return arr;
  }

  // implement your tests here
  ---

4. The function myFizzBuzz (num) receives a number num and returns "fizzbuzz" if the number is divisible by 3 and 5, returns "fizz" if it is divisible by only 3, returns "buzz" if divisible only by 5, returns the number itself if not divisible by 3 or 5 and returns false if num is not a number
  1. Make a call with a number divisible by 3 and 5 and check if the return is as expected
  2. Make a call with a number divisible by 3 and check if the return is as expected
  3. Make a call with a number divisible by 5 and check if the return is as expected
  4. Make a call with a number that is not divisible by 3 or 5 and check if the return is as expected
  5. Make a call with a parameter that is not a number and check if the return is as expected

  ---
  const assert = require('assert');

  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

  // implement your tests here
  ---

5. Compare two objects (JSON) to check whether they are identical or not
  ---
  const assert = require('assert');

  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };

  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };

  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

  // implement your tests here
  ---