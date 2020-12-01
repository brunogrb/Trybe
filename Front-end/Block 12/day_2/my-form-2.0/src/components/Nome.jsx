import React from 'react';

class Nome extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    let error = undefined;
    if (value.length > 40) error = "Texto muito grande!";

    return(
      <label>
        <input
          name="nome"
          placeholder="Nome"
          type="text"
          value={value}
          onChange={changeHandler}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Nome;