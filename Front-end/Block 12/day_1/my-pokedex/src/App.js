import './App.css';
import React from 'react';
import pokemonsData from './Data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.nextPokemon = this.nextPokemon.bind(this)
    this.state = {
      index: 0,
      type: "Fire",
    }
  }

  nextPokemon = () => {
    const { index } = this.state;
    if (index < 8)
      return (this.setState({
        index: index + 1,
      }));
    return (this.setState({
      index: 0,
    }));
  }

  render() {
    return(
      <div className="App">
        <h1 className="title">Pokedex</h1>
        <Pokedex pokemons={pokemonsData[this.state.index]} />
        <button onClick={this.nextPokemon}>Next Pokemon</button>
      </div>
    );
  }
}

export default App;
