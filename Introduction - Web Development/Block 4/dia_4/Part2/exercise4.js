function greaterNumberOfCharacters(lista){ 
  let temp = "";
  let posicao;
  for(let i=0; i<lista.length;i+=1){
    if(temp.length<lista[i].length) {
      posicao=i;
      temp=lista[i];
    }
  }
  return lista[posicao];
}

console.log(greaterNumberOfCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));