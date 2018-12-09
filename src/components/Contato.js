import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      id: null,
      name: "",
      email: "",
      phone: ""
    }
  }

  componentDidMount() {
    const {
      id,
      name,
      email,
      phone
    } = this.props.item
    
    this.setState({
      id,
      name,
      email,
      phone
    })
  }

  deleteItem = () => {
    this.props.deleteItem(this.state)
    this.props.history.push("/");
  }

  updateItem = () => {
    this.props.history.push({
      pathname: '/cadastro',
      contact:  this.state 
    });
  }

  render() {
    const {
      name,
      email,
      phone
    } = this.state;

    return (
      <div>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>Telefone: {phone}</p>
        <button className="btn btn-primary" onClick={this.updateItem}>Editar</button>
        <button className="btn btn-danger" onClick={this.deleteItem}>Deletar</button>
      </div>
    )
  }
}

