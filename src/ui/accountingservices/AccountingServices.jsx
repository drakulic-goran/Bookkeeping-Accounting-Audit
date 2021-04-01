
import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

// import './home.css';

export const AccountingServices = () => {

    return (
        <div>
            <Jumbotron className="mt-4" fluid>
                <Container>
                    <h4>Računovodstvena i knjigovodstvena agencija za Vas obavlja sledeće poslove:</h4>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={4}>
                                <ListGroup className="mt-4" >
                                    <ListGroup.Item action href="#link1">
                                        Vođene glavne knjige
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Obracun PDV-a
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3">
                                        Vođenje knjige ulaznih i izlaznih računa ( KUF i KIF)
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link4">
                                        Analitičke evidencije
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link5">
                                        Robno knjigovodstvo za veleprodaje
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link6">
                                        Izradu kalkulacija
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link7">
                                        Ažurno vođenje KEP knjige
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link8">
                                        Vođenje radnih odnosa (Ugovori o radu, dopunski rad, M-UN ili M-UN/K, privremeni i povremeni poslovi i dr), prijave – odjave radnika, obračun zarada i naknada zarada, bolovanje do 30 i preko 30 dana, porodiljsko bolovanje, predaja odgovarajuće dokumentacije
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link9">
                                        Upis radnog staža (M-4 obrasci, M-4/SP, itd)
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link10">
                                        Obračun putnih domaćih i ino dnevnica
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link11">
                                        Platni promet
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link12">
                                        Evidencija osnovnih sredstava
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link13">
                                        Zastupanje pred državnim organima
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link14">
                                        Izrada završnog obračuna
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
                                    <Tab.Pane eventKey="#link11">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link12">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link13">
                                        <div>OPIS</div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link14">
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

export default AccountingServices;