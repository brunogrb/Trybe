- 1 Make five programs, one for each basic arithmetic operation. Your program must have two variables, a and b, defined at the beginning with the values to be operated. Make programs for:
Addition
Subtraction
Multiplication
Division
Module

- 2 Make a program that returns the greater of two numbers. Define two variables at the beginning of the program with the values to be compared.

- 3 Make a program that returns the largest of three numbers. Define three variables at the beginning of the program with the values to be compared.

- 4 Make a program that, given a value defined in a variable, returns "positive" if that value is positive, "negative" if it is negative and "zero" otherwise.

- 5 Make a program that defines three variables with the values of the three internal angles of a triangle. Return true if the angles represent the angles of a triangle and false otherwise. * For the angles to be a valid triangle, the sum of the three must be 180 degrees. If the angles are invalid, the program should return an error message. *

- 6 Write a program that is named after a chess piece and returns the movements it makes.
     - As a challenge, make the program work both if you receive the name of a part with uppercase letters and with lowercase letters, without increasing the number of conditionals. *
     - As a hint, you can search for a function that makes a string have all lower case letters. *
     - If the part passed is invalid, the program should return an error message. *
     - Example: bishop -> diagonals *

- 7 Write a program that converts a grade given in percentage (from 0 to 100) into concepts from A to F. Follow these rules:
     - Percentage> = 90 -> A
     - Percentage> = 80 -> B
     - Percentage> = 70 -> C
     - Percentage> = 60 -> D
     - Percentage> = 50 -> E
     - Percentage <50 -> F
     - The program should return an error message and end if the grade passed is less than 0 or greater than 100.

- 8 Write a program that defines three numbers in variables at the beginning and returns true if at least one of the three is even. Otherwise, it returns false.
    - Bonus: use only an if.

- 9 Write a program that defines three numbers in variables at the beginning and returns true if at least one of the three is odd. Otherwise, it returns false.
    - Bonus: use only an if.

- 10 Write a program that starts with two values ​​in two different variables: the cost of a product and its sales value. From the values, calculate how much profit (sales value less the cost of the product) the company will have when selling 1,000 of these products.
    - Note that a 20% tax is levied on the cost of the product.
    - Your program should also issue an error message and close if any of its input values ​​is less than zero.
    - The profit of a product is the result of subtracting the sale value from the cost of the product, and the 20% tax is also part of the cost value.
    - valueCostTotal = valueCost + taxAboutCost
    - profit = salesValue - TotalCost (profit from a product)

- 11 Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
    -A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    -INSS
        -Salário bruto até R$ 1.556,94: alíquota de 8%
        -Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        -Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        -Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    -IR
        -Até R$ 1.903,98: isento de imposto de renda
        -De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        -De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        -De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        -Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.