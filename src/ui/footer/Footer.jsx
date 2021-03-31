import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Footer.css';

export const Footer = () => {

    return (
        <div className="fixed-bottom ">
            <Navbar bg="dark" variant="dark">
                <Container className="flex-column">
                    <Navbar.Brand style={{ marginLeft: '60px' }} href="/">
                        <div class="row container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <img src="/img/logo.png" weign="80" height="80" alt="Logo" />
                            <p style={{ fontSize: '11px', color: 'grey' }}>© 2021 Sva prava zastićena</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <div class="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Nav.Link style={{ marginLeft: '30px', fontSize: '16px', color: 'white' }} href="about">
                                | O nama |
                            </Nav.Link>
                            <Nav.Link style={{ marginLeft: '30px', fontSize: '16px', color: 'white' }} href="auditservices">
                                | Revizorske usluge |
                            </Nav.Link>
                            <Nav.Link style={{ marginLeft: '30px', fontSize: '16px', color: 'white' }} href="accountingservices">
                                | Računovodstvene usluge |
                            </Nav.Link>
                            <Nav.Link style={{ marginLeft: '30px', fontSize: '16px', color: 'white' }} href="contact">
                                | Kontakt |
                            </Nav.Link>
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;