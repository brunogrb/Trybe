import React from 'react';

class Cargo extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    let error = undefined;
    if (value.length > 20) error = "Texto muito grande!";

    return(
      <label>
        <input
          type="text"
          name="cargo"
          placeholder="Cargo"
          value={value}
          onChange={changeHandler}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Cargo;