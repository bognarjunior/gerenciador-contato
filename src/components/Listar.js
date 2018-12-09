import React, { Component } from 'react';
import { getList, deleteItem } from'./../services';
import Contato from './Contato';

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

    return listContacts.map(item => <Contato {...this.props} item={item} deleteItem={this.deleteItemStore} key={item.email}/>);
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
