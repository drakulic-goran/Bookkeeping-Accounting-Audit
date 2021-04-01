
import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

// import './home.css';

export const AuditServices = () => {

    return (
        <div>
            <Jumbotron className="mt-4" fluid>
                <Container>
                    <h4>Agencija za Vas obavlja sledeće revizorske poslove:</h4>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={4}>
                                <ListGroup className="mt-4" >
                                    <ListGroup.Item action href="#link1">
                                        Izradu revizorskih procena
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Izrada revizorskog izveštaja
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Statutorna revizija finansijskih izveštaja
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                        Revizija konsolidacionih paketa
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link5">
                                        Revizija vanrednih finansijskih izveštaja
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link6">
                                        Revizija pojedinačnih finansijskih izveštaja i posebnih elemenata, računa ili stavki finansijskih izveštaja
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link7">
                                        Revizija finansijskih izveštaja pripremljenih u skladu sa okvirima specijalne namene
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link8">
                                        Izveštavanje o sažetim finansijskim izveštajima
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link9">
                                        Obavljanje ugovorenih postupaka u vezi sa finansijskim informacijama
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link10">
                                        Obavljanje kompilacije finansijskih izveštaja
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content className="mt-4" >
                                    <Tab.Pane eventKey="#link1">
                                        <div>OPIS I CENA</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link2">
                                        <div>OPIS I CENA</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link3">
                                        <div>OPIS I CENA</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link4">
                                        <div>OPIS I CENA</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link5">
                                        <div>OPIS I CENA</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link6">
                                        <div>OPIS I CENA</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link7">
                                        <div>OPIS I CENA</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link8">
                                        <div>OPIS I CENA</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link9">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link10">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </Jumbotron>
        </div>
    )

}

export default AuditServices;