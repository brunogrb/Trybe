let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter=0;

for (let i=0; i<numbers.length;i++){
    if(numbers[i]%2!=0) {counter++;}
}

if(counter==0) return console.log("no odd values found");
else return console.log(counter);