import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import { Row, Col, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Form.css'

class Formulario extends Component {
    render() {
        return (
            
                <Container>
                    <div id="formulario">
                    <Form>
                        <Form.Row>
                        <Form.Group as={Col} xs={6} md={3}controlId="formGridZip">
                            <Form.Label>Entrada</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} xs={6} md={3} controlId="formGridZip">
                            <Form.Label>Saida</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group as={Col} xs={6} md={3} controlId="formGridZip">
                            <Form.Label>Contratos</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} xs={6} md={3} controlId="formGridState">
                            <Form.Label>Tipo de operação</Form.Label>
                            <Form.Control as="select">
                                <option>Compra</option>
                                <option>Venda</option>
                            </Form.Control>
                        </Form.Group>
                        </Form.Row>
                        <Button variant="outline-light" type="submit" xs={12} md={1}>Enviar Trade</Button>  
                        
                    </Form>
                    </div>
                </Container>
            

        );
    }
}

export default Formulario;
