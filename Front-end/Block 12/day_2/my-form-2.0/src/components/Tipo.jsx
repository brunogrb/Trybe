import React from 'react';

class Tipo extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    let error = undefined;
    if (value.length > 20) error = "Texto muito grande!";

    return(
      <label>
        <input
          type="text"
          name="tipo"
          placeholder="Tipo de residencia"
          value={value}
          onChange={changeHandler}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Tipo;