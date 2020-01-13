import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { parseISO, format } from 'date-fns';
import { FaHotjar } from "react-icons/fa";

import './tabela.css';

export default class Tabela extends Component {
    constructor(props){
        super(props);
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
                            <th></th>

                        </tr>
                    </thead>

                    <tbody>
                        {this.props.trades.map(trade => {
                            const datajs = parseISO(trade.data);
                            const dataFormatada = format(
                                datajs,
                                "dd'/'MM'/'yyyy"
                            );
                            let idSaldo = "positivo";
                            let saldo = parseFloat(trade.saldo);
                            if (saldo <= 0) {
                                idSaldo = "negativo";
                            }

                            let Icon = "C";
                            let idCss = "compra"
                            if (trade.tipo === 'venda') {
                                Icon = "V";
                                idCss = "venda";
                            }

                            return (
                                <tr key={trade._id}>
                                    <td><Icon id={idCss} /></td>
                                    <td>{trade.entrada}</td>
                                    <td>{trade.saida}</td>
                                    <td>{trade.pontos}</td>
                                    <td>{trade.contratos}</td>
                                    <td id={idSaldo}>{trade.saldo}</td>
                                    <td>{dataFormatada}</td>
                                    <td><Button onClick={ () => this.props.removeTradeporId(trade._id)} variant="outline-light"><FaHotjar /></Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        );
    }
}
