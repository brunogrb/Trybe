function lowestValueIndex(lista){ 
  let temp = 999;
  let posicao;
  for(let i=0; i<lista.length;i+=1){
    if(temp>lista[i]) {
      posicao=i;
      temp=lista[i];
    }
  }
  return posicao;
}

console.log(lowestValueIndex([2, 4, 6, 7, 10, 0, -3]));