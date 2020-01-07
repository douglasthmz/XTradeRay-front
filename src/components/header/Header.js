import React from 'react';
import { Navbar } from 'react-bootstrap';
import {Container} from 'react-bootstrap';


const Header = () => (
    
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand href="#home">
                XRayTrade
            </Navbar.Brand>
            </Container>
        </Navbar>
    
);

export default Header;

