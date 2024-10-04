import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo_horizontal from '../../assets/logo_horizontal.png';
import './Header.scss';

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" className="header">
            <Container className="d-flex justify-content-between align-items-center">
                <Navbar.Brand href="#home" aria-label="Homepage">
                    <img
                        src={logo_horizontal}
                        alt="Logo"
                        className="logo"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home" aria-label="Home">Home</Nav.Link>
                    <Nav.Link href="#features" aria-label="Demo">Demo</Nav.Link>
                    <Nav.Link href="#pricing" aria-label="About">About</Nav.Link>
                    <Nav.Link href="#contact" aria-label="Contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
