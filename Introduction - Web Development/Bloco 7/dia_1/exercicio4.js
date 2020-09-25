// Trocando o "X" da frase
let phrase = "Trybe X here! My top five skills are:";

// Function 1
const changeX = anotherPhrase => {
  return phrase.replace("X", anotherPhrase);
}

const skills = ['HTML', 'JavaScript', 'C++', 'Communicative', 'Proactive'];
// Function 2

const concatenate = concatena => {
  const orderedSkills = skills.sort();
  console.log(changeX(concatena));
  for (let i = 0; i < orderedSkills.length ; i += 1){
    console.log(`* ${orderedSkills[i]}`);
  }  
}

concatenate("Bruno");