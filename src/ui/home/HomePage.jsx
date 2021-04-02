
import React from 'react';

import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

import './HomePage.css';

export const HomePage = () => {

    return (
        <div>
            <div className='container-fluid' >
                <Jumbotron className="content-center mt-4" fluid>
                    <Container>
                        <h4>Dobrodošli!</h4>
                        <p className="mt-4">
                            Budite slobodni da nas kontaktirate i unapredite vaše poslovanje.
                        </p>
                    </Container>
                </Jumbotron>
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src="/img/bookkeeping.jpg?img=1"
                                    alt="First slide"
                                    thumbnail
                                />
                                <Carousel.Caption>
                                    <h5 className="mt-2 ml-2 mr-2" >Knjigovodstvene i računovodstvene usluge</h5>
                                    <p className="mt-3 ml-2 mr-2" >
                                        Vođene glavne knjige, KUF, KIF i KEP knjige. Izrada kalkulacija i završnog obračuna... 
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src="/img/tax.jpg?img=1"
                                    alt="Second slide"
                                    thumbnail
                                />
                                <Carousel.Caption>
                                    <h5 className="mt-2 ml-2 mr-2" >Poresko savetovanje</h5>
                                    <p className="mt-3 ml-2 mr-2" >
                                        Poresko savetovanje i zastupanje pred organima Poreske uprave. Obračun PDV-a i predaja poreskih prijava. Korespodencija sa Poreskom Upravom...
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src="/img/employees.jpg?img=1"
                                    alt="Third slide"
                                    thumbnail
                                />
                                <Carousel.Caption>
                                    <h5 className="mt-2 ml-2 mr-2" >Radni odnos</h5>
                                    <p className="mt-3 ml-2 mr-2" >
                                        Prijave i odjave radnika. Priprema svih ugovora i obrazaca vezanih za radne odnose. Obračun zarada i naknada zarada. Upis radnog staža...
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <Jumbotron className="content-center mt-5" fluid>
                    <Container>
                        <h4>Precizne i ažurne usluge</h4>
                        <p className="mt-4">
                            Odgovornost za poveren posao, pouzdanost, ljubaznost.
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )

}

export default HomePage;