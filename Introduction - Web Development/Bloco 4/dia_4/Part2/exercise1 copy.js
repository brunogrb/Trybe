function indiceMaiorValor(lista){
  let temp = 0;
  let posicao;
  for(let i=0; i<lista.length;i+=1){
    if(temp<lista[i]) {
      posicao=i;
      temp=lista[i];
    }
  }
  return posicao;
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));