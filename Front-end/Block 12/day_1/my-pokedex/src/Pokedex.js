import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render () {
    return (
      <div className="pokedex">
        {console.log(this.props.pokemons)}
        <Pokemon pokemon={this.props.pokemons} />
      </div>
    );
  }
}

export default Pokedex;
