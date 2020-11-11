import React from 'react';

class Estado extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    let error = undefined;
    if (value.length > 40) error = "Texto muito grande!";

    return(
      <label>
        <input
          type="text"
          name="estado"
          placeholder="Estado"
          value={value}
          onChange={changeHandler}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Estado;