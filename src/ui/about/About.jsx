
import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

// import './About.css';

export const About = () => {

    return (
        <div>
            <Jumbotron className="content-center mt-4" fluid>
                <Container>
                    <h4>
                        Knjigovodstvena agencija koja dugi niz godina pruža knjigovodstvene usluge za privredna drustva i preduzetnike.
                    </h4>
                    <p className="mt-4">
                        Iskustvo naseg kadra je veliko, uz veliku sposobnost prilagođavanja svakom klijentu i preuzimanje celokupne odgovornosti za svoj rad.
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>
                <Container>
                    <h5>Ukoliko se odlučite za naše usluge dobijate:</h5>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={4}>
                                <ListGroup className="mt-4 ml-3" >
                                    <ListGroup.Item action href="#link1">
                                        Efikasne i priznate revizorske usluge
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Precizne i ažurne knjigovodstvene usluge
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Poresko savetovanje i zastupanje pred organima Poreske uprave
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                        Prijave i odjave radnika, kao i pripremu svih ugovora i obrazaca vezanih za radne odnose
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link5">
                                        Korektne cene naših usluga
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content className="mt-4 mr-3" >
                                    <Tab.Pane eventKey="#link1">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link2">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link3">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link4">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link5">
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

export default About;