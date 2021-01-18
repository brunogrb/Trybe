import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      element: '',
    };
  }
  render() {
    return (
      <div className='App'>
        <p>Learn React!</p>
      </div>
    );
  }
}

export default App;
