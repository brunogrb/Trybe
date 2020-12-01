import React from 'react';

class Cidade extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    let error = undefined;
    if (value.length > 40) error = "Texto muito grande!";

    return(
      <label>
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={value}
          onChange={changeHandler}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Cidade;