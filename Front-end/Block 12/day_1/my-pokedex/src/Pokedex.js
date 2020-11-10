import React from 'react';

class Pokedex extends React.Component {
  render () {
    const {name, type, averageWeight, image} = this.props.pokemons;
    return (
      <div className="pokemon">
        <div><strong>{name}</strong></div>
        <div>Type: {type}</div>
        <div>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</div>
        <img src={image} alt={name}/>
      </div>
      );
  }
}

export default Pokedex;
