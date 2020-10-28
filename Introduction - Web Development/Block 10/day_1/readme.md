## First steps at Jest

#### Practicing testing implementation

1. The sum (a, b) function returns the sum of parameter a and b
  1. Test if the sum return (4, 5) is 9
  2. Test whether the return of sum (0, 0) is 0
  3. Test if the sum function throws an error when the parameters are 4 and "5" (string 5)
  4. Test if the error message is "parameters must be numbers" when making the sum call (4, "5")

2. The myRemove (arr, item) function receives an arr array and returns a copy of that array without the item element if it exists in the array
  1. Check that the myRemove call ([1, 2, 3, 4], 3) returns the expected array
  2. Check that the myRemove call ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]
  3. Check that the array passed by parameter has not changed
  4. Check if the myRemove call ([1, 2, 3, 4], 5) returns the expected array

3. The myRemoveWithoutCopy (arr, item) function receives an arr array and returns the array itself without the item element if it exists in the array
  1. Check that the myRemoveWithoutCopy call ([1, 2, 3, 4], 3) returns the expected array
  2. Check that the myRemoveWithoutCopy call ([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]
  3. Make a call to the myRemoveWithoutCopy function and check if the array passed by parameter has changed
  4. Check if the myRemoveWithoutCopy call ([1, 2, 3, 4], 5) returns the expected array

4. The function myFizzBuzz (num) receives a number num and returns "fizzbuzz" if the number is divisible by 3 and 5, returns "fizz" if it is divisible by only 3, returns "buzz" if divisible only by 5, returns the number itself if not divisible by 3 or 5 and returns false if num is not a number
  1. Make a call with a number divisible by 3 and 5 and check if the return is as expected
  2. Make a call with a number divisible by 3 and check if the return is as expected
  3. Make a call with a number divisible by 5 and check if the return is as expected
  4. Make a call with a number that is not divisible by 3 or 5 and check if the return is as expected
  5. Make a call with a parameter that is not a number and check if the return is as expected

5. Compare two objects (JSON) to check whether they are identical or not