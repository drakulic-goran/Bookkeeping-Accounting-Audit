
import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

// import './home.css';

export const About = () => {

    return (
        <div>
            <Jumbotron className="content-center mt-4" fluid>
                <Container>
                    <h3>
                        Knjigovodstvena agencija koja dugi niz godina pruža knjigovodstvene usluge za privredna drustva i preduzetnike.
                        </h3>
                    <p>
                        Iskustvo naseg kadra je veliko, uz veliku sposobnost prilagođavanja svakom klijentu i preuzimanje sve odgovornosti za svoj rad.
                        </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid>
                <Container>
                    <h5>Ukoliko se odlučite za naše usluge dobijate:</h5>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={4}>
                                <ListGroup className="mt-4" >
                                    <ListGroup.Item action href="#link1">
                                        Precizne i ažurne knjigovodstvene usluge
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Poresko savetovanje
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Obračun PDV-a
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                        Zastupanje pred organima Poreske uprave
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link5">
                                        Prijave, odjave radnika, kao i pripremu svih ugovora i obrazaca vezanih za radne odnose
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link6">
                                        Obračun zarada i naknada zarada
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link7">
                                        Izradu M-4 obrazaca, PPP obrazaca
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link8">
                                        Upis radnog staža
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link9">
                                        Korespodenciju sa Poreskom Upravom
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link10">
                                        Korektne cene naših usluga
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content className="mt-4" >
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
                                    <Tab.Pane eventKey="#link6">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link7">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link8">
                                        <div>OPIS</div>
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

export default About;