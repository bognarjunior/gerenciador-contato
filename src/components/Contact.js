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
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <button className="btn btn-primary" style={styles.button} onClick={this.updateItem}>Editar</button>
          <button className="btn btn-danger" onClick={this.deleteItem}>Deletar</button>
        </td>
      </tr>
    )
  }
}

const styles = {
  button: {
    'margin-right': '10px'
  }
}