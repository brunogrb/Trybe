import React from 'react';

class Pokemon extends React.Component {
  render () {
    const {name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p><strong>{name}</strong></p>
          <p>Type: {type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={name}/>
      </div>
      );
  }
}

export default Pokemon;