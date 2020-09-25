// Função para retornar maior palavra

const longestWord = phrase => {
  let big = "";
  phrase.split(' ').forEach(element => {
    if (element.length > big.length) {
      big = element;
    }
  });
  console.log(big);
}

longestWord('Rocket has no reverse');