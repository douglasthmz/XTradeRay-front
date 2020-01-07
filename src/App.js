import React, { Component, Fragment } from 'react';
import Header from './components/header/Header';
import Formulario from './components/formulario/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css'



class App extends Component {
  render() {
    return (
      <Fragment>
       <div id="global">
        <Header />
        <Formulario />
        </div>
        
      </Fragment>
    );
  }
}

export default App;
