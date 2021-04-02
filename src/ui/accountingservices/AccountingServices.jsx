
import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

// import './AccountingServices.css';

export const AccountingServices = () => {

    return (
        <div>
            <Jumbotron className="mt-4" fluid>
                <Container>
                    <h5>Računovodstvena i knjigovodstvena agencija za Vas obavlja sledeće poslove:</h5>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={4}>
                                <ListGroup className="mt-4 ml-3" >
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
                                        Vođenje radnih odnosa
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link9">
                                        Upis radnog staža
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
                                <Tab.Content className="mt-5 mr-3" >
                                    <Tab.Pane eventKey="#link1">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link2">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link3">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link4">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link5">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link6">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link7">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link8">
                                        <div className="text-justify">
                                            Ugovori o radu, dopunski rad, M-UN ili M-UN/K, privremeni i povremeni poslovi i dr), prijave – odjave radnika, obračun zarada i naknada zarada, bolovanje do 30 i preko 30 dana, porodiljsko bolovanje, predaja odgovarajuće dokumentacije...
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link9">
                                        <div className="text-justify">
                                            M-4 obrasci, M-4/SP, itd
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link10">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link11">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link12">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link13">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link14">
                                        <div className="text-justify">
                                            OPIS
                                        </div>
                                        <div className="text-right mt-5 mr-5">
                                            50$
                                        </div>
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