let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let initialNumbers = [];

for(let i=0;i<numbers.length;i++){initialNumbers[i]=numbers[i];}
console.log("Array Numbers: ")
console.log(initialNumbers);
console.log("-------------------------------");


for (let j=1; j<numbers.length;j++){
    for(let i=0; i<(numbers.length-j);i++){
        if(numbers[i]>numbers[i+1]){  
            let aux = numbers[i];
            numbers[i]=numbers[i+1];
            numbers[i+1]=aux;
        }
    }
}

console.log("1 - Order the array numbers in ascending order and print their values: ");
console.log(numbers);
console.log("-------------------------------");

for (let j=1; j<numbers.length;j++){
    for(let i=0; i<(numbers.length-j);i++){
        if(numbers[i]<numbers[i+1]){  
            let aux = numbers[i];
            numbers[i]=numbers[i+1];
            numbers[i+1]=aux;
        }
    }
}

console.log("2 - Order the array numbers in descending order and print their values: ");
console.log(numbers);
console.log("-------------------------------");

for (let i=0; i<initialNumbers.length-1;i++){
    initialNumbers[i]=initialNumbers[i]*initialNumbers[i+1];
}
initialNumbers[initialNumbers.length-1]=initialNumbers[initialNumbers.length-1]*2;

console.log("3 - Bonus exercise part 3: ");
console.log(initialNumbers);
