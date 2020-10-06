function wordEndChecks(word1, word2){
  let temp = word2.length-1;
  for(let i=(word1.length-1);i>word2.length;i-=1){
    if(word1[i]!=word2[temp]){return false;}
    else temp-=1;
    if(temp==0) break;
  }
  return true;
}

console.log(wordEndChecks("trybe","be"));