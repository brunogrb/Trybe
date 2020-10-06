let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i=0; i<numbers.length;i++){
    sum+=numbers[i];
}

if((sum/numbers.length)>20) return console.log("value greater than 20");
else return console.log("value less than or equal to 20");