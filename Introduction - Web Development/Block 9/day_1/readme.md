### JavaScript Assíncrono e Callbacks

1. Given the code below, what is the order in which the commented lines are finished?
<!--
  const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
    `${name} is ${value} ${measurementUnit} apart from the Sun`;

  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };

  const venus = {
    name: "Venus",
    distanceFromSun: {
      value: 108200000,
      measurementUnit: "kilometers",
    },
  };

  const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
      value: 778500000,
      measurementUnit: "kilometers",
    },
  };

  console.log(planetDistanceFromSun(mars)); // A
  console.log(planetDistanceFromSun(venus)); // B
  console.log(planetDistanceFromSun(jupiter)); // C
-->

2. Now, given the code below, what is the order in which the lines commented are finished?

<!-- 
  const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
    `${name} is ${value} ${measurementUnit} apart from the Sun`;

  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };

  const venus = {
    name: "Venus",
    distanceFromSun: {
      value: 108200000,
      measurementUnit: "kilometers",
    },
  };

  const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
      value: 778500000,
      measurementUnit: "kilometers",
    },
  };

  console.log(planetDistanceFromSun(mars)); // A
  setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
  setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
-->

3. The *getPlanet* function below prints the planet Mars synchronously. Modify *getPlanet*, so that Mars is printed asynchronously, after 4 seconds.

<!-- 
  const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos
-->

4. Suponha que você precise simular uma mensagem enviada do robô *Curiosity* de Marte para a Terra. O *Curiosity* envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função *sendMarsTemperature*, que imprime a temperatura em Marte.

<!-- 
  const messageDelay = () => Math.floor(Math.random() * 5000);

  const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
  };

  // crie a função sendMarsTemperature abaixo


  sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

-->

**BONUS**

1. Now that you have done the function that sends the temperature of Mars, suppose that you are able to send to the Curiosity robot what you want to do, once you have successfully obtained the temperature on Mars. Then, add a callback in the sendMarsTemperature function that contains the actions to be taken over the temperature.

<!-- 
  const messageDelay = () => Math.floor(Math.random() * 5000);

  const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
  };

  const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
  const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
  const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

  // definição da função sendMarsTemperature...


  sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
  sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
-->

2. Finally, the Curiosity robot has a 60% message sending success rate due to the fact that the robot is already very busy with other operations. Then, add in the sendMarsTemperature function another callback that contains the actions to be taken in case of failure.

<!-- 
  const messageDelay = () => Math.floor(Math.random() * 5000);

  const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
  }

  const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
  const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
  const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

  const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

  // definição da função sendMarsTemperature...


  // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
  sendMarsTemperature(temperatureInFahrenheit, handleError);

  // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
  sendMarsTemperature(greet, handleError);
-->