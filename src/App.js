import React, { Component, Fragment } from 'react';
import Header from './components/header/Header';
import Formulario from './components/formulario/Form';
import Tabela from './components/tabela/Tabela';
import api from '../src/components/services/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css'



class App extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    trades: []
  }

  carregaTrades = async () => {
    const response = await api.get('/trades');
    this.setState({ trades: response.data });

  }

 removeTradeporId = async (id) => {
    const url = '/trades/' + id;
    const res = await api.delete(url);
    console.log(res.status, id);
    this.carregaTrades();
  }

  componentDidMount() {
    this.carregaTrades();
  }



  render() {
    return (
      <Fragment>

        <Header />
        <Formulario submit={this.carregaTrades} />
        <Tabela trades={this.state.trades} removeTradeporId={this.removeTradeporId} />


      </Fragment>
    );
  }
}

export default App;
