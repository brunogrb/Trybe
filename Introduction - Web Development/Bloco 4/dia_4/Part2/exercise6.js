function sumOfIntegers(integer){ 
  let soma=0;
  for(let i=1; i<=integer;i+=1){
    soma=soma+(i);
  }
  return soma;
}

console.log(sumOfIntegers(5));