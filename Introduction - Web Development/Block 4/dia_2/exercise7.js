let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter=9999;

for (let i=0; i<numbers.length;i++){
    if(numbers[i]<counter) {counter=numbers[i];}
}


console.log(counter);