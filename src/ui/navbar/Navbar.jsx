import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Navbar.css';

export const NavbarGeneric = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">
                <img src="/img/logo.png" weign="40" height="40" alt="Logo" />
                {'  '}
                Računovodstvo i Revizija
                {'      '}
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Usluge" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="auditservices">
                            {/* Audit services */}
                            Revizorske usluge
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="accountingservices">
                            {/* Accounting services */}
                            Računovodstvene usluge
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="about">
                        {/* About */}
                        O nama
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="contact">
                        {/* Contact */}
                        Kontakt
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    )
}

export default NavbarGeneric;