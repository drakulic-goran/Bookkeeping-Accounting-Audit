import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import './Footer.css';

export const Footer = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container className="flex-column">
                <Navbar.Brand style={{ marginLeft: '60px' }} href="/">
                    <div className="row container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <img src="/img/logo.png" weign="60" height="60" alt="DraxuS" />
                        <div style={{ paddingLeft: '10px' }}>RK DraxuS</div>
                        <p style={{ fontSize: '10px', color: 'grey' }}>© 2021 Sva prava zastićena</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Brand>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Nav.Link style={{ marginLeft: '30px', fontSize: '13px', color: 'white' }} href="about">
                            | O nama |
                            </Nav.Link>
                        <Nav.Link style={{ marginLeft: '30px', fontSize: '13px', color: 'white' }} href="auditservices">
                            | Revizorske usluge |
                            </Nav.Link>
                        <Nav.Link style={{ marginLeft: '30px', fontSize: '13px', color: 'white' }} href="accountingservices">
                            | Računovodstvene usluge |
                            </Nav.Link>
                        <Nav.Link style={{ marginLeft: '30px', fontSize: '13px', color: 'white' }} href="contact">
                            | Kontakt |
                            </Nav.Link>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;