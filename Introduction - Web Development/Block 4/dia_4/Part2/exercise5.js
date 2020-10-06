function integerThatIsMoreRepeated(lista){ 
  let posicao;
  let repeat=0;
  for(let i=0; i<lista.length;i+=1){
    let temp = lista[i];
    let cont = 0;
    for(let j=0;j<lista.length;j+=1){
      if(i!=j){
        if(temp==lista[j]) cont+=1;
      }
    }
    if(repeat<cont) {
      repeat=cont;
      posicao=i;
    }

  }
  return lista[posicao];
}

console.log(integerThatIsMoreRepeated([2, 3, 2, 5, 8, 2, 3]));