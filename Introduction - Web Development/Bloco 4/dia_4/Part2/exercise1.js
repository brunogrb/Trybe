function verificaPalindrome(palavra){
  let retorno = true;
  let palavra2 = "";

  for(let i=palavra.length-1; i>=0;i-=1){
    palavra2+=palavra[i];
  }
  for(let i=0; i<palavra.length;i+=1){
    if (palavra2[i]!=palavra[i]){
      return false;
    }
  }
  return true;
};

console.log(verificaPalindrome("arara"));
let a =[10,2,3,7,20,31,31];
let b = Math.max(...a);
console.log(b);