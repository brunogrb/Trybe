const { sum: sum, myRemove: myRemove, myRemoveWithoutCopy: myRemoveWithoutCopy, myFizzBuzz: myFizzBuzz } = require('./exercises');


describe('The sum (a, b) function returns the sum of parameter a and b', () => {

  test('2 plus 3 should return 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('0 plus 0 should return 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('sum function throws an error when the parameters are 4 and "5" (string 5)', () => {
    expect(() => {sum(4, "5")}).toThrow();
  });

  test('the error message is "parameters must be numbers" when making the sum call (4, "5")', () => {
    expect(() => {sum(4, "5")}).toThrow('parameters must be numbers');
  });

});

describe('Receives an array and returns a copy of that array without the item element', () => {
  const array = [1, 2, 3, 4];

  test('Check that the myRemove call ([1, 2, 3, 4], 3) returns the expected array', () => {
    expect(myRemove(array, 3)).toStrictEqual([1, 2, 4]);
  });

  test('Check that the myRemove call ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]', () => {
    expect(myRemove(array, 3)).not.toStrictEqual([1, 2, 3, 4]);
  });

  test('Check that the array passed by parameter has not changed', () => {
    expect(myRemove(array, 3)).not.toStrictEqual(array);
  });

  test('Check if the myRemove call ([1, 2, 3, 4], 5) returns the expected array', () => {
    expect(myRemove(array, 5)).toStrictEqual([1, 2, 3, 4]);
  });
});

describe('myRemoveWithoutCopy (arr, item) function receives an array and returns the array itself without the element if it exists in the array', () => {
  let array = [1, 2, 3, 4];

  test('The function myRemoveWithoutCopy ([1, 2, 3, 4], 3) returns the array [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy(array, 3)).toStrictEqual([1, 2, 4]);
  });

  test('Check that the function myRemoveWithoutCopy ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy(array, 3)).not.toStrictEqual([1, 2, 3, 4]);
  });

  test('check if the array passed by parameter has changed', () => {
    expect(myRemoveWithoutCopy(array, 3)).toStrictEqual(array);
  });
  
  test('the function myRemoveWithoutCopy call ([1, 2, 3, 4], 5) returns the expected array', () => {
    expect(myRemoveWithoutCopy(array, 5)).toStrictEqual([1, 2, 4]);
  });

});

describe('The function myFizzBuzz (num) receives a number num and returns "fizzbuzz" if the number is divisible by 3 and 5, returns "fizz" if it is divisible by only 3, returns "buzz" if divisible only by 5, returns the number itself if not divisible by 3 or 5 and returns false if num is not a number', () => {

  test('Make a call with a number divisible by 3 and 5 and check if the return is as expected', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('Make a call with a number divisible by 3 and check if the return is as expected', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('Make a call with a number divisible by 5 and check if the return is as expected', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('Make a call with a number that is not divisible by 3 or 5 and check if the return is as expected', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  test('Make a call with a parameter that is not a number and check if the return is as expected', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });

});

describe('Compare two objects (JSON) to check whether they are identical or not', () => {
  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };

  test('Compare two objects to have all the same properties', () => {
    expect(obj1).toEqual(obj2);
  });

  test('Compare two objects are not the exact same', () => {
    expect(obj1).not.toBe(obj2);
  });

});