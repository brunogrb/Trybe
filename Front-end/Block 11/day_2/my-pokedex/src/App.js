import './App.css';
import React from 'react';
import pokemons from './Data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        {pokemons.map(pokemon => <Pokedex pokemons={pokemon} />)}
      </div>
    );
  }
}

export default App;
