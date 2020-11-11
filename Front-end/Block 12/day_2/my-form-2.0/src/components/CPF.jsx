import React from 'react';

class CPF extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    let error = undefined;
    if (value > 99999999999) error = "CPF inválido!";

    return(
      <label>
        <input
          type="number"
          name="cpf"
          placeholder="Digite o número do seu CPF"
          value={value}
          onChange={changeHandler}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default CPF;