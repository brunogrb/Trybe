## Part I - Objects and For / In

Using the object below, do the following exercises:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

1.  Print a welcome message on the console to the character above, including her name.
    * Expected value on the console: Welcome, Margarida.

2. Insert a new property in the object with the key name "recorrente" and the value "Sim" and then print the object on the console.
    * Expected value on the console:
    {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
    };

3. Make a for / in that shows all the keys of the object.
    * Expected value on the console:
    personagem
    origem
    nota
    recorrente

4. Make a new for / in, but now show all key values of the object.
    * Expected value on the console:
    Margarida
    Pato Donald
    Namorada do personagem principal nos quadrinhos do Pato Donald
    Sim

5. Now, define a second object with the same structure (the same keys) as the first and the following values: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics # 178", "The last MacPatinhas", "Yes".
    * Expected value on the console:
    Margarida e Tio Patinhas
    Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
    Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
    Ambos recorrentes // Atenção para essa última linha!

## Part II - Functions

1. Create a function that takes a string and returns true if it is a palindrome, or false if it is not.
    * Example of palindrome: arara.
    * checksPalindrome ("arara");
    * Expected return: true
    * checksPalindrome ("development");
    * Expected return: false

2. Create a function that receives an array of integers and returns the index of the highest value.
    * Test array: [2, 3, 6, 7, 10, 1];
    * Expected value in the function return: 4.

3. Create a function that receives an array of integers and returns the index of the lowest value.
    * Test array: [2, 4, 6, 7, 10, 0, -3] ;.
    * Expected value on function return: 6.

4. Create a function that receives an array of names and returns the name with the most characters.
    * Test array: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'] ;.
    * Expected value on function return: Fernanda.

5. Create a function that receives an array of integers and returns the most repeatable integer.
    * Test array: [2, 3, 2, 5, 8, 2, 3].
    * Expected value on function return: 2.

6. Create a function that receives an integer N and returns the sum of all numbers from 1 to N.
    * Test value: N = 5.
    * Expected value in the function return: 1 + 2 + 3 + 4 + 5 = 15.

7. Create a function that receives a word string and another ending string. Check that the ending string is the end of the word string. Consider that the ending string will always be less than the word string.
    * Test value: "trybe" and "be"
    * Expected value on function return: true
    * verifiesEndWord ("trybe", "be");
    * Expected return: true
    * verifyFimPalavra ("joaofernando", "fernan");
    * Expected return: false

## Bonus

1. (Difficult) Make a program that receives a string in Roman numerals and returns the number that the string represents.
    * Attention! This exercise has already appeared in the selection process of a large multinational!
    * Tips:
        * A string is an array of characters, so each element of the array is a letter.
        * The value of each Roman numeral is:
            | I   | 1    |
            | --- | ---- |
            | IV  | 4    |
            | V   | 5    |
            | IX  | 9    |
            | X   | 10   |
            | XL  | 40   |
            | L   | 50   |
            | XC  | 90   |
            | C   | 100  |
            | CD  | 400  |
            | D   | 500  |
            | CM  | 900  |
            | M   | 1000 |
    * How about creating an object that associates each letter with a numeral for easy reference?
    * Attention! When you have a small number to the right of a large number, they must be added together. Example: XI = 10 + 1 = 11. However, if the small number is to the left of a number greater than it, it must be subtracted. Example: IX = 10 - 1 = 9.

2. For the next exercise you will need to have a CodeWars account, to understand how to do it, access this content we did about it. After following the registration steps, access the proposed challenge and then click on TRAIN, you will then be redirected to the page where the challenge must be done. When you have finished the exercise, click on TEST to check, with simple tests, if your solution satisfies what was requested. Passing these tests click on ATTEMPT, when doing this your code will go through all the existing tests to validate the solution. If your solution is correct the SUBMIT button will be available, click on it to submit your answer, otherwise go back to your code and see what is still not satisfying what is requested, repeat this process until your solution is correct.
    * Challenge - 16 + 8 = 214;
    * This challenge will require a little knowledge about some JavaScript methods, so do some research when necessary and if you have any questions ask Slack for help. Doubts on how to do a good research? Smoothly! Access this content on how to search as a developer.