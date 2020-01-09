import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import { Col, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Form.css'
import { Formik } from 'formik';
import * as Yup from 'yup';

class Formulario extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const schemaValidacao = Yup.object().shape({
            entrada: Yup.string()
                .min(0, "*Não pode haver numeros negativos")
                .max(6, "*O mercado hoje não subiu isso tudo, coloque valores decentes")
                .required("*Valor de entrada é obrigatório"),
            saida: Yup.string()
                .min(0, "*Não pode haver numeros negativos")
                .max(6, "*O mercado hoje não subiu isso tudo, coloque valores decentes")
                .required("*Valor de saída é obrigatório"),
            contratos: Yup.string()
                .min(1, "*Pelo menos 1 contrato né?")
                .max(4, "*Você não é o banco Itau!")
                .required("*Coloque pelo menos 1 contrato"),
            tipo: Yup.string()

        });
        return (
            <Container>
                <div id="formulario">
                    <Formik
                        initialValues={{ entrada: "", saida: "", contratos: "1", tipo: "" }}
                        validationSchema={schemaValidacao}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            // When button submits form and form is in the process of submitting, submit button is disabled
                            setSubmitting(true);

                            // Resets form after submission is complete
                            resetForm();

                            // Sets setSubmitting to false after form is reset
                            setSubmitting(false);
                        }}>

                        {/* Callback function containing Formik state and helpers that handle common form actions */}
                        {({ values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting }) => (

                                <form onSubmit={handleSubmit}>
                                    <Form>
                                        {console.log(errors.entrada)}
                                        <Form.Row>
                                            <Form.Group as={Col} xs={6} md={3} controlId="entrada">
                                                <Form.Label>Entrada</Form.Label>
                                                <Form.Control
                                                    type="string"
                                                    /* This name property is used to access the value of the form element via values.nameOfElement */
                                                    name="entrada"
                                                    placeholder="Entrada"
                                                    /* Set onChange to handleChange */
                                                    onChange={handleChange}
                                                    /* Set onBlur to handleBlur */
                                                    onBlur={handleBlur}
                                                    /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                                                    value={values.entrada}
                                                    className={touched.entrada && errors.entrada ? "error" : null} />
                                            </Form.Group>

                                            <Form.Group as={Col} xs={6} md={3} controlId="saida">
                                                <Form.Label>Saida</Form.Label>
                                                <Form.Control
                                                    type="string"
                                                    name="saida"
                                                    placeholder="Saída"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.saida}
                                                    className={touched.saida && errors.saida ? "error" : null} />
                                            </Form.Group>
                                            <Form.Group as={Col} xs={6} md={3} controlId="contratos">
                                                <Form.Label>Contratos</Form.Label>
                                                <Form.Control
                                                    type="string"
                                                    name="contratos"
                                                    placeholder="Contratos"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.contratos}
                                                    className={touched.contratos && errors.contratos ? "error" : null} />
                                            </Form.Group>

                                            <Form.Group as={Col} xs={6} md={3} controlId="tipoOperacao">
                                                <Form.Label><span>Tipo</span></Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="tipo"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.tipo}>
                                                    <option value="compra">Compra</option>
                                                    <option value="venda">Venda</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <Button variant="outline-light" type="submit" disabled={isSubmitting} xs={12} md={1}>Enviar Trade</Button>

                                    </Form>
                                </form>

                            )}
                    </Formik>

                </div>
            </Container>


        );
    }
}

export default Formulario;
