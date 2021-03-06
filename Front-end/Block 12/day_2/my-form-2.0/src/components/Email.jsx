import React from 'react';

class Email extends React.Component {
  render() {
    const { value, changeHandler } = this.props;

    // let error = undefined;
    // const regex = ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$;
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