import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Cadastro from './Cadastro';
import Listar from './Listar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/">Lista de atrações</Link>
              <Link className="nav-item nav-link" to="/cadastro"> Cadastar</Link>
            </div>
          </div>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Listar}/>
            <Route path="/cadastro" component={Cadastro}/>
          </Switch>
        </main>
    </div>
    );
  }
}

export default App;