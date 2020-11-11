import React from 'react'; 
import Nome from './components/Nome';
import Email from './components/Email';
import CPF from './components/CPF';
import Endereco from './components/Endereco';
import Cidade from './components/Cidade';
import Estado from './components/Estado';
import Tipo from './components/Tipo';
import ResumoCurriculo from './components/ResumoCurriculo';
import Cargo from './components/Cargo';
import DescricaoDoCargo from './components/DescricaoDoCargo';



class Form extends React.Component {
  constructor() {
    super();

    this.changeHandler = this.changeHandler.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: 0,
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo: '',
    }
  }

  changeHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div className="Form">
        <fieldset className="dados-pessoais">
          <Nome value={this.state.nome} changeHandler={this.changeHandler} />
          <Email value={this.state.email} changeHandler={this.changeHandler} />
          <CPF value={this.state.cpf} changeHandler={this.changeHandler} />
          <Endereco value={this.state.endereco} changeHandler={this.changeHandler} />
          <Cidade value={this.state.cidade} changeHandler={this.changeHandler} />
          <Estado value={this.state.estado} changeHandler={this.changeHandler} />
          <Tipo value={this.state.tipo} changeHandler={this.changeHandler} />
        </fieldset>
        <fieldset className="emprego">
          <ResumoCurriculo value={this.state.resumoCurriculo} changeHandler={this.changeHandler} />
          <Cargo value={this.state.cargo} changeHandler={this.changeHandler} />
          <DescricaoDoCargo value={this.state.descricaoCargo} changeHandler={this.changeHandler} />
        </fieldset>
      </div>
    );
  }
}

export default Form;
