import React, { Component } from 'react';
import { getList, deleteItem } from'../services';
import Contact from './Contact';

export default class Listar extends Component {
  
  state = {
    listContacts: [],
    isLoad: false
  }

  componentDidMount() {
    this.getListStore();
  }

  getListStore = () => {
    this.setState({
      listContacts: getList(),
      isLoad: true
    })
  }

  deleteItemStore = (item) => {
    deleteItem(item);
    this.getListStore();
  }

  renderList = () => {
    const { listContacts } = this.state;
    if (listContacts.length === 0) {
      return (
        <div className="alert alert-danger" role="alert">
          Não existe nenhum contato cadastrado!
        </div>
      )
    }

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Telefone</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {listContacts.map(item => <Contact {...this.props} item={item} deleteItem={this.deleteItemStore} key={item.email}/>)}
        </tbody>
      </table>
    ) 
  }
  
  
  render() {
    return (
      <div>
        <h1>Lista de Contatos</h1>
        {
          this.state.isLoad ?
            this.renderList()
          : null
        }
      </div>
    )
  }
}
