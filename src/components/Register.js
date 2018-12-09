import React, { Component } from 'react';
import FormValidator from '../utils/FormValidator';
import { setList, updateItem } from'../services';

export default class Register extends Component {

  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      { 
        field: 'name', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Nome é obrigatório.' 
      },
      { 
        field: 'email',
        method: 'isEmail', 
        validWhen: true, 
        message: 'Este não é um email válido.'
      },
      {
        field: 'phone', 
        method: 'matches',
        args: [/^\(?\d\d\)? ?\d\d\d\d\d-?\d\d\d\d$/],
        validWhen: true, 
        message: 'Adicione um número de telefone válido.'
      },
    ]);

    this.state = {
      contact: {
        id: null,
        name: "",
        email: "",
        phone: ""
      },
      validation: this.validator.valid(),
    };
  }
 

  componentDidMount() {
    if (this.props.location.contact !== undefined) {
      const {
        contact
      } = this.props.location
      
      this.setState({
        contact
      })
    }
  }

  handleName = (e) => {
    let contact = Object.assign({}, this.state.contact);
    contact.name = e.target.value;
    this.setState({contact});
  }

  handleEmail = (e) => {
    let contact = Object.assign({}, this.state.contact);
    contact.email = e.target.value;
    this.setState({contact});
  }

  handlePhone = (e) => {
    let contact = Object.assign({}, this.state.contact);
    contact.phone = e.target.value;
    this.setState({contact});
  }

  setIdAndSave = (id) => {
    const d = new Date();
    let contact = Object.assign({}, this.state.contact);
    contact.id = d.getTime();
    this.setState({contact}, this.saveAndRedirect);
  }

  saveItens = () => {

    const validation = this.validator.validate(this.state.contact);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      const { id } = this.state.contact;

      if (!id) {
        this.setIdAndSave(id);
      } else {
        this.updateContact();
      }
    }
  }

  updateContact = () => {
    updateItem(this.state.contact);
    this.props.history.push("/");
  }

  saveAndRedirect = () => {
    setList(this.state.contact);
    this.props.history.push("/");
  }
  
  cancelForm = () => {
    this.setState({
      id: "",
      name: "",
      email: "",
      phone: ""
    });
    this.props.history.push("/");
  }

  render() {
    let validation = this.submitted ?  this.validator.validate(this.state.contact) : this.state.validation;

    return (
      <div>
        <h1>Cadastrar Contato</h1>
        <div className="form-group">
          <label htmlFor="inputName">Nome</label>
          <input type="text" value={this.state.contact.name} className="form-control" id="inputName" placeholder="Digite o nome" onChange={this.handleName}/>
          <span className="help-block text-danger">{validation.name.message}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input type="email" value={this.state.contact.email} className="form-control" id="inputEmail" placeholder="exemplo@email.com.br" onChange={this.handleEmail}/>
          <span className="help-block text-danger">{validation.email.message}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="inputPhone">Telefone</label>
          <input type="text" value={this.state.contact.phone} className="form-control" id="inputPhone" placeholder="99 99999-9999" onChange={this.handlePhone}/>
          <span className="help-block text-danger">{validation.phone.message}</span>
        </div>
        
        <div className="d-flex justify-content-around">
          <button className="btn btn-primary" onClick={this.saveItens}>Salvar</button>
          <button className="btn btn-danger" onClick={this.cancelForm}>Cancelar</button>
        </div>
      </div>
    )
  }
}
