import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Register from './Register';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/">Lista de atrações</Link>
              <Link className="nav-item nav-link" to="/register"> Cadastar</Link>
            </div>
          </div>
        </nav>
        <main style={styles.main}>
          <Switch>
            <Route exact path="/" component={List}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </main>
    </div>
    );
  }
}

const styles = {
  main: {
    'margin-top': '20px'
  }
}


export default App;