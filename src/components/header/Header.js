import React from 'react';
import { Navbar } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import '../header/Header.css';


const Header = () => (
    
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand href="#home">
                <span class="upcase">XRT</span>
            </Navbar.Brand>
            </Container>
        </Navbar>
    
);

export default Header;

