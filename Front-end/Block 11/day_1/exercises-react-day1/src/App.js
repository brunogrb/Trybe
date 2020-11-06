import './App.css';
import ReactDOM from 'react-dom';

const task = () => {
  let value = new Date;
  return (
  <li>{value.getHours()}:{value.getMinutes()}:{value.getSeconds()}</li>
  );
}

function App() {
  return (
    setInterval(() => {
      ReactDOM.render(task(), document.getElementById('root'))
    }, 1000)
  );
}

export default App;
