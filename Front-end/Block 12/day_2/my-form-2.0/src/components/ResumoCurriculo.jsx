import React from 'react';

class ResumoCurriculo extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    let error = undefined;
    if (value.length > 20) error = "Texto muito grande!";

    return(
      <label>
        <textarea
          type="text"
          name="resumoCurriculo"
          placeholder="Faça um resumo de seu currículo"
          value={value}
          onChange={changeHandler}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default ResumoCurriculo;