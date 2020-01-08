import React, { Component, Fragment } from 'react';
import Header from './components/header/Header';
import Formulario from './components/formulario/Form';
import Tabela from './components/tabela/Tabela';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css'



class App extends Component {
  render() {
    return (
      <Fragment>
      
        <Header />
        <Formulario />
        <Tabela/>
        
        
      </Fragment>
    );
  }
}

export default App;
