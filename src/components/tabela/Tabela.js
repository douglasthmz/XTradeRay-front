import React, { Component } from 'react';
import api from '../services/Api';
import { Container, Table } from 'react-bootstrap';
import { parseISO, format} from 'date-fns';

  import './tabela.css';

export default class Tabela extends Component {
    state={
        trades: []
    }
    componentDidMount() {
        this.carregaTrades();
    }

    carregaTrades = async() => {
        const response = await api.get('/trades');
        this.setState({trades: response.data})

    }

    render() {
        return (
            <Container>
            <Table striped responsive hover variant="dark">
                 <thead>
                     <tr>
                        <th>Tipo</th>
                        <th>Entrada</th>
                        <th>Saida</th>
                        <th>Pontos</th>
                        <th>Contratos</th>
                        <th>Saldo</th>
                        <th>Data</th>
                     </tr>
                 </thead>
                 
                 <tbody>
                {this.state.trades.map(trade=> {
                    const datajs = parseISO(trade.data);
                    const dataFormatada=format(
                        datajs,
                        "dd'/'MM'/'yyyy"
                    );

                    
                    return (
                    <tr key={trade._id}>
                        <td>{trade.tipo}</td>
                        <td>{trade.entrada}</td>
                        <td>{trade.saida}</td>
                        <td>{trade.pontos}</td>
                        <td>{trade.contratos}</td>
                        <td>{trade.saldo}</td>
                        <td>{dataFormatada}</td>
                    </tr> 
                )})}
                </tbody>
                </Table>
            </Container>
        );
    }
}
