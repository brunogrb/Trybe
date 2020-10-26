const API_URL = 'https://icanhazdadjoke.com/';

appendJoke = (jokes) => {
  const showJokes = document.getElementById('jokeContainer');
  showJokes.innerText = jokes;
}

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };
//  fetch(API_URL, myObject)
//  .then(response => response.json())
//  .then(data => appendJoke(data.joke));
// };

generateRandomNumbers = () => {
  let numbers = [];
  for (let i = 0; i < 10; i += 1) {
    numbers.push(Math.pow(Math.floor((Math.random() * 50) + 1), 2));
  }
  return numbers;
}

sumOfAnArray = (array) => {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return Math.floor(sum);
}

// displayJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };
//   fetch(API_URL, myObject)
//   .then(response => response.json())
//   .then(data => appendJoke(data.joke));
// }

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
 fetch(API_URL, myObject)
 .then(response => response.json())
 .then(data => appendJoke(data.joke));
 
  return promise = new Promise((resolve, reject) => {
    const numbers = generateRandomNumbers();
    const sum = sumOfAnArray(numbers);
    if (sum < 8000){
      const result = [sum / 2, sum / 3, sum / 5, sum / 10];
      return resolve(result);
    } else {
      return reject(numbers);
    }
  })
  .then(number => console.log(sumOfAnArray(number)))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

window.onload = () => fetchJoke();
