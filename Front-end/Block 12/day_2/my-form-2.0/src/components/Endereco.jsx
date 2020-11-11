import React from 'react';

class Endereco extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    let error = undefined;
    if (value.length > 80) error = "Texto muito grande!";

    return(
      <label>
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={value}
          onChange={changeHandler}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Endereco;