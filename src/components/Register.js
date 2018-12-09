import React, { Component } from 'react';

import { setList, updateItem } from'../services';

export default class Register extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      contact: {
        id: null,
        name: "",
        email: "",
        phone: ""
      },
      isInValid: false
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
    this.setState({
      isInValid: false
    });
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
    if(!this.validate()){
      this.setState({
        isInValid: true
      })
      return;
    };

    const { id } = this.state.contact;

    if (!id) {
      this.setIdAndSave(id);
    } else {
      this.updateContact();
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
  
  validate = () => {
    const { name } = this.state.contact;
    return (name.trim().length < 3) ? false : true;
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
    return (
      <div>
        <h1>Cadastrar Contato</h1>
        <div className="form-group">
          <label htmlFor="inputName">Nome</label>
          <input type="text" value={this.state.contact.name} className="form-control" id="inputName" placeholder="Digite o nome" onChange={this.handleName}/>
        </div>
        
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input type="email" value={this.state.contact.email} className="form-control" id="inputEmail" placeholder="exemplo@email.com.br" onChange={this.handleEmail}/>
        </div>
        
        <div className="form-group">
          <label htmlFor="inputPhone">Telefone</label>
          <input type="text" value={this.state.contact.phone} className="form-control" id="inputPhone" placeholder="99 99999-9999" onChange={this.handlePhone}/>
        </div>
        
        <div className="d-flex justify-content-around">
          <button className="btn btn-primary" onClick={this.saveItens}>Salvar</button>
          <button className="btn btn-danger" onClick={this.cancelForm}>Cancelar</button>
        </div>
      </div>
    )
  }
}
