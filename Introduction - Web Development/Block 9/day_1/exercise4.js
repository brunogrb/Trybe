const messageDelay = () => {
  const temp =  Math.floor(Math.random() * 5000);
  console.log(temp);
  return temp;
}
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (temperatura) => console.log(`Mars temperature is: ${temperatura}°C`);

setTimeout(() => sendMarsTemperature(getMarsTemperature()), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo