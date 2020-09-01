let prime = 32;
let counter = 0;

for(let i=2;i<prime;i+=1)
{
    if(prime%i==0){
        counter +=1;
    }
}
if(counter==0) console.log("The number is a prime number");
else console.log("The number is not a prime number");