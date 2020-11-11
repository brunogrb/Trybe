import React from 'react';

class Email extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    // let error = undefined;
    // const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    // if (value.match(regex)) error = "Email inválido!";

    return(
      <label>
        <input
          name="email"
          placeholder="exemple@exemple.com"
          type="email"
          value={value}
          onChange={changeHandler}
        />
        {/* <span>{error ? error : ''}</span> */}
      </label>
    );
  }
}

export default Email;