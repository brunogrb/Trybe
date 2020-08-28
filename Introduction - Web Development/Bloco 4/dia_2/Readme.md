## Exercises

Read the statements carefully and do as you are asked! You will use this array to perform exercises 1 through 7:

**let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];**

1. In this first exercise, go through the array by printing all the values contained in it with the function *console.log ()*;

2. For the second exercise, you must add all the values contained in the array and print the result;

3. For the third exercise, calculate and print the arithmetic mean of the values contained in the air
    - The arithmetic mean is the result of the sum of all elements divided by the total number of elements.

4. With the same code as in the previous exercise, if the final value is greater than 20, print the message: "value greater than 20". If not, print the message: "value less than or equal to 20";

5. Using *for*, find out which is the highest value contained in the array and print it;

6. Find out how many odd values are in the array and print the result. If none exist, print the message: "no odd values found";

7. Using *for*, find out what is the lowest value in the array and print it;

8. Using *for*, create an array that goes from 1 to 25 and print the result;

9. Using the array created in the previous exercise, print the result of dividing each of the elements by **2**.

## **Bonus**

For the next two exercises read [this article](http://http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/) and try to understand what is happening in the code below:

for (let i = 1; i < array.length; i++) {
for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
    let position = array[i];

    array[i] = array[j];
    array[j] = position;
    }
}
}

1. Order the array numbers in ascending order and print their values;

2. Order the array numbers in descending order and print their values;

3. You will now create a new array from the numbers array, without losing it. Each value of the new array must be equal to the corresponding value in the array numbers multiplied by the following. For example: the first value of the new array should be 45, as it is the multiplication of 5 (first value) and 9 (next value). The second value of the new array should be 27, since it is the multiplication of 9 (second value) and 3 (next value), and so on. If there is no next value, the multiplication must be done by 2. Do this using the *for* and the push method. The result should be the array below:
 - [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];