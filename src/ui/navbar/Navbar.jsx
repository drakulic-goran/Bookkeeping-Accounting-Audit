import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import './Navbar.css';

export const NavbarGeneric = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">Računovodstvo i Revizija           </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">  
                <Nav className="mr-auto">
                    <NavDropdown title="Services" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="auditservices">Audit services</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="accountingservices">Accounting services</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    )
}

export default NavbarGeneric;