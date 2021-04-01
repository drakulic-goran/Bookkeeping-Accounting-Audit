
import React from 'react';

// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

import './HomePage.css';

export const HomePage = () => {

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };

    return (
        <div>
            <div className='container-fluid' >
                <Jumbotron className="content-center mt-4" fluid>
                    <Container>
                        <h1>Dobrodošli!</h1>
                        <p>
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
                                    <h3>Knjigovodstvene, računovodstvene i revizorske usluge</h3>
                                    <p>Vođene glavne knjige, knjige ulaznih i izlaznih računa, KEP knjige. Robno knjigovodstvo. Izrada kalkulacija. Platni promet. Izrada završnog obračuna. </p>
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
                                    <h3>Poresko savetovanje</h3>
                                    <p>Obračun PDV-a. Zastupanje pred organima Poreske uprave. Korespodencija sa Poreskom Upravom.</p>
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
                                    <h3>Radni odnos</h3>
                                    <p>Prijave, odjave radnika, kao i priprema svih ugovora i obrazaca vezanih za radne odnose. Obračun zarada i naknada zarada. Upis radnog staža.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <Jumbotron className="content-center mt-5" fluid>
                    <Container>
                        <h1>Precizne i ažurne usluge</h1>
                        <p>
                            Odgovornost za poveren posao, pouzdanost, ljubaznost.
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )

}

export default HomePage;