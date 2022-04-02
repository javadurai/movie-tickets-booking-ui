import React, { Component }  from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import './AppNav.css';

export default function AppNav(props) {
    return (
        <Navbar bg="light" variant="light" class="app-nav">
            <Container>
                <Navbar.Brand href="#home">Movie Mark</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#movies">Movies</Nav.Link>
                    <Nav.Link href="#theatres">Theatres</Nav.Link>
                </Nav>
                <div className='d-flex'>
                    <a href='#signin'>Sign In</a>{' or '}<a href='#signup'>Create Account</a>
                </div>
            </Container>
        </Navbar>
    );
}