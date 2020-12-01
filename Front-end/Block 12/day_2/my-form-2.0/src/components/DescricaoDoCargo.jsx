import React from 'react';

class DescricaoDoCargo extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    let error = undefined;
    if (value.length > 20) error = "Texto muito grande!";

    return(
      <label>
        <textarea
          type="text"
          name="descricaoCargo"
          placeholder="Descreva o cargo"
          value={value}
          onChange={changeHandler}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default DescricaoDoCargo;